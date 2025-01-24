import seoConfig from "@/seo.config";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import YoutubeSection from "@/components/sections/youtube-section";
import Container from "../components/ui/Container";

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
export default async function Home() {
  const res = await fetch("/api/projects");
  const data = await res.json();
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-4">
        <HeroSection />
        <ProjectSection projects={data.projects} />
        <YoutubeSection />
      </div>
    </Container>
  );
}
