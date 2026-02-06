import { Section, SectionHeader } from "../components/ui/Section";

/**
 * About page component.
 * Placeholder page with a section header and descriptive text.
 * Replace the content with project, team, or mission information.
 * @returns {JSX.Element} The about page.
 */
function AboutPage() {
  return (
    <Section>
      <SectionHeader
        title="About"
        subtitle="Tell visitors about the project, team, or mission."
      />
      <div className="mx-auto max-w-3xl space-y-6 text-text-muted">
        <p>
          This is a placeholder page. Replace this content with information
          about your project, your team, your story, or whatever is relevant.
        </p>
        <p>
          You can structure this page however you like — add images, team member
          cards, a timeline, or any other content that tells your story.
        </p>
      </div>
    </Section>
  );
}

export default AboutPage;
