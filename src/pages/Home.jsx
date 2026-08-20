import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Mission from "../components/Mission";
import Stats from "../components/Stats";
import Story from "../components/Story";
import NewsReel from "../components/NewsReel";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Stats />
      <NewsReel />
      <Story />
      <Partners />
    </>
  );
}
