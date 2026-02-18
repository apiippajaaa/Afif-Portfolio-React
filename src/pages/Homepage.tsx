import HomeBackground from "../animations/Background/starsBackground";
import GetInTouch from "../components/GetInTouch";
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
        <GetInTouch />
      </main>
    </>
  );
};

export default Homepage;
