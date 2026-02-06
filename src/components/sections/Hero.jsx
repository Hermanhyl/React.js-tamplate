import Button from "../ui/Button";

/**
 * Hero banner section component.
 * Displays a full-width banner with a headline, subtitle, and primary/secondary
 * CTA buttons. Used as the main landing area on the home page.
 * @returns {JSX.Element} The hero section.
 */
function Hero() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container-wrapper text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
          Your Main Headline Goes Here
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
          A compelling subheadline that explains the value proposition or
          purpose of this project. Replace this with your own content.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/about" size="lg">
            Primary Action
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Secondary Action
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
