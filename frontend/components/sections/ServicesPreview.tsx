import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

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

interface ServicesPreviewProps {
  services: ServiceItem[];
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text-neon">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.id}>
              <Card
                variant="neon"
                className="h-full cursor-pointer group transition-all duration-300 hover:scale-105"
              >
                {service.icon && (
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                      <Image
                        src={service.icon.url}
                        alt={service.icon.alternativeText || service.title}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                      />
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
