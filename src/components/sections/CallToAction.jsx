import Button from "../ui/Button";

function CallToAction() {
  return (
    <section className="bg-primary py-20">
      <div className="container-wrapper text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Replace this with a compelling call to action that motivates visitors
          to take the next step.
        </p>
        <div className="mt-8">
          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
