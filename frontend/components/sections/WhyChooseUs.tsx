import { Card } from "@/components/ui/Card";
import Image from "next/image";

interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  icon?: {
    url: string;
    alternativeText?: string;
  };
}

interface WhyChooseUsProps {
  items: WhyChooseUsItem[];
}

export function WhyChooseUs({ items }: WhyChooseUsProps) {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text-neon">
          Why Choose Spark Edge
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              variant="glass"
              className="text-center group hover:scale-105"
            >
              {item.icon && (
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <Image
                      src={item.icon.url}
                      alt={item.icon.alternativeText || item.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain filter brightness-110"
                    />
                  </div>
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
