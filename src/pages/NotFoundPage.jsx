import { Section } from "../components/ui/Section";
import Button from "../components/ui/Button";

function NotFoundPage() {
  return (
    <Section className="flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold text-text">Page Not Found</h1>
        <p className="mt-2 text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button to="/">Go Home</Button>
        </div>
      </div>
    </Section>
  );
}

export default NotFoundPage;
