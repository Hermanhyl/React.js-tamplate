import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import CallToAction from "../components/sections/CallToAction";

/**
 * Home page component.
 * Composes the landing page by rendering the Hero banner, Features grid,
 * and Call-to-Action sections in sequence.
 * @returns {JSX.Element} The home page.
 */
function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CallToAction />
    </>
  );
}

export default HomePage;
