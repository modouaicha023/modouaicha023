"use client";
import Container from "@/components/ui/utils/Container";
import seoConfig from "@/seo.config";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

const metadata = {
  title: "Home | Modou Aicha Diop Portfolio",
  description:
    "Welcome to the portfolio of Modou Aicha Diop, web developer in Dakar, Senegal.",
  openGraph: {
    ...seoConfig.openGraph,
    title: "Home | Modou Aicha Diop Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
};
export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-10">
        <HeroSection />
        <ProjectSection />
      </div>
    </Container>
  );
}
