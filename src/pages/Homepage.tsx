import HomeBackground from "../animations/Background/starsBackground";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";

const Homepage = () => {
  return (
    <>
      <main className="snap-container">
        <HomeBackground />
        <Hero />
        <Services />
        <Skills />
      </main>
    </>
  );
};

export default Homepage;
