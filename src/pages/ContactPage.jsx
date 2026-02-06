import { useState } from "react";
import { Section, SectionHeader } from "../components/ui/Section";
import Button from "../components/ui/Button";

/**
 * Contact page component.
 * Renders a controlled contact form with name, email, and message fields.
 * Form submission is a placeholder — connect to a backend or email service.
 * @returns {JSX.Element} The contact page.
 */
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /**
   * Updates form state when any input field changes.
   * @param {React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>} e - The change event.
   */
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * Handles form submission. Currently logs data and shows an alert.
   * Replace with an API call or email service integration.
   * @param {React.FormEvent<HTMLFormElement>} e - The submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission (API call, email service, etc.)
    console.log("Form submitted:", formData);
    alert("Form submission not yet implemented. Connect to your backend.");
  };

  return (
    <Section>
      <SectionHeader
        title="Contact"
        subtitle="Get in touch — fill out the form below."
      />
      <div className="mx-auto max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-text"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-text"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-text"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="How can we help?"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
}

export default ContactPage;
