import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  heroImage?: {
    url: string;
    alternativeText?: string;
  };
}

export function Hero({ title, subtitle, ctaText, heroImage }: HeroProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        heroImage
          ? "bg-black"
          : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      }`}
    >
      {/* Background Image */}
      {heroImage && (
        <>
          <Image
            src={heroImage.url}
            alt={heroImage.alternativeText || "Hero background"}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {/* Animated background elements - only show if no hero image */}
      {!heroImage && (
        <>
          {/* Floating neon orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse animate-pulse-neon"
            style={{ animation: "floatingGlow 6s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse"
            style={{
              animation: "floatingGlow 8s ease-in-out infinite reverse",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"
            style={{ animation: "floatingGlow 10s ease-in-out infinite" }}
          ></div>

          {/* Neon grid lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight gradient-text-neon animate-fade-in-up">
            {title}
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed animate-fade-in-up delay-200">
            {subtitle}
          </p>
          <div className="animate-fade-in-up delay-400">
            <Button
              size="lg"
              variant="neon"
              className="px-8 py-4 text-lg font-semibold hover:scale-105"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center hover:border-cyan-400 transition-colors duration-300">
          <div className="w-1 h-3 bg-cyan-400/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
