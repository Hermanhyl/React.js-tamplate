import { Section, SectionHeader } from "../ui/Section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/Card";

const features = [
  {
    title: "Feature One",
    description: "Brief description of this feature and its value to users.",
    icon: "🚀",
  },
  {
    title: "Feature Two",
    description: "Brief description of this feature and its value to users.",
    icon: "⚡",
  },
  {
    title: "Feature Three",
    description: "Brief description of this feature and its value to users.",
    icon: "🎯",
  },
];

function Features() {
  return (
    <Section id="features">
      <SectionHeader
        title="Features"
        subtitle="Highlight the key features or benefits of your project here."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <span className="text-3xl">{feature.icon}</span>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-muted">
                Additional details about this feature can go here. Replace with
                real content.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Features;
