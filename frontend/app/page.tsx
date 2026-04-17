import axios from "axios";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  icon?: {
    url: string;
    alternativeText?: string;
  };
}

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  slug: string;
  icon?: {
    url: string;
    alternativeText?: string;
  };
}

interface HomepageData {
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  heroImage?: {
    url: string;
    alternativeText?: string;
  };
  whyChooseUs: WhyChooseUsItem[];
  servicesPreview: ServiceItem[];
}

interface MediaField {
  url: string;
  alternativeText?: string;
}

interface RichTextNode {
  children?: Array<{
    text?: string;
  }>;
}

interface HomepageWhyChooseUsApiItem {
  id: number;
  title: string;
  description: string;
  icon?: MediaField;
}

interface HomepageServiceApiItem {
  id: number;
  title: string;
  description?: string | RichTextNode[];
  slug: string;
  icon?: MediaField;
}

interface HomepageApiResponseData {
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  heroImage?: MediaField;
  whyChooseUs?: HomepageWhyChooseUsApiItem[];
  servicesPreview?: HomepageServiceApiItem[];
}

// Server Component data fetching
async function getHomepageData(): Promise<HomepageData> {
  try {
    const res = await axios.get<{ data: HomepageApiResponseData }>(
      "http://localhost:1337/api/homepage?populate[0]=heroImage&populate[1]=whyChooseUs.icon&populate[2]=servicesPreview.icon"
    );

    const homepage = res.data.data;

    const whyChooseUs: WhyChooseUsItem[] = (homepage.whyChooseUs || []).map(
      (item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        icon: item.icon
          ? {
              url: `http://localhost:1337${item.icon.url}`,
              alternativeText: item.icon.alternativeText || item.title,
            }
          : undefined,
      })
    );

    const servicesPreview: ServiceItem[] = (homepage.servicesPreview || []).map(
      (item) => ({
        id: item.id,
        title: item.title,
        // Parse rich text description - get the text from the first paragraph
        description:
          typeof item.description === "string"
            ? item.description
            : item.description?.[0]?.children?.[0]?.text || "",
        slug: item.slug,
        icon: item.icon
          ? {
              url: `http://localhost:1337${item.icon.url}`,
              alternativeText: item.icon.alternativeText || item.title,
            }
          : undefined,
      })
    );

    return {
      heroTitle: homepage.heroTitle,
      heroSubtitle: homepage.heroSubtitle,
      heroCTA: homepage.heroCTA,
      heroImage: homepage.heroImage
        ? {
            url: `http://localhost:1337${homepage.heroImage.url}`,
            alternativeText: homepage.heroImage.alternativeText || "Hero image",
          }
        : undefined,
      whyChooseUs,
      servicesPreview,
    };
  } catch (err) {
    console.error("Error fetching homepage data:", err);
    return {
      heroTitle: "Welcome to Spark Edge",
      heroSubtitle: "We build awesome websites",
      heroCTA: "Get Started",
      heroImage: undefined,
      whyChooseUs: [],
      servicesPreview: [],
    };
  }
}

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <main>
      <Hero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        ctaText={data.heroCTA}
        heroImage={data.heroImage}
      />
      <WhyChooseUs items={data.whyChooseUs} />
      <ServicesPreview services={data.servicesPreview} />
    </main>
  );
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 60;
