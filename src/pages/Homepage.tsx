import { useEffect } from "react";
import HomeBackground from "../animations/Background/starsBackground";
import GetInTouch from "../components/GetInTouch";
// import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";

const Homepage = () => {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  return (
    <>
      <main className="snap-container">
        <HomeBackground />
        {/* <Hero /> */}

        <Services />
        <Skills />
        <GetInTouch />
      </main>
    </>
  );
};

export default Homepage;
