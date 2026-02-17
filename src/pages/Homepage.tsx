import HomeBackground from "../animations/Background/starsBackground";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Homepage = () => {
  return (
    <>
      <main className="snap-container">
        <HomeBackground />
        <Hero />
        <Services />
      </main>
    </>
  );
};

export default Homepage;
