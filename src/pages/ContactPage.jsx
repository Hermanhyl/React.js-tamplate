import { useState } from "react";
import { Section, SectionHeader } from "../components/ui/Section";
import Button from "../components/ui/Button";

/**
 * Validates the contact form data.
 * @param {{ name: string, email: string, message: string }} data - Form field values.
 * @returns {{ name: string, email: string, message: string }} Error messages per field (empty string = valid).
 */
function validateForm(data) {
  const errors = { name: "", email: "", message: "" };

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

/**
 * Contact page component.
 * Renders a validated contact form with name, email, and message fields.
 * Includes per-field error messages, submission status feedback, and
 * ARIA attributes for accessibility.
 * @returns {JSX.Element} The contact page.
 */
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  /** @type {"idle"|"submitting"|"success"} */
  const [formStatus, setFormStatus] = useState("idle");

  /**
   * Updates form state when any input field changes.
   * Clears the field's error message on change.
   * @param {React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>} e - The change event.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (formStatus === "success") {
      setFormStatus("idle");
    }
  };

  /**
   * Handles form submission with validation.
   * Replace the setTimeout with an actual API call or email service.
   * @param {React.FormEvent<HTMLFormElement>} e - The submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    const hasErrors = Object.values(errors).some((msg) => msg !== "");

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    setFormStatus("submitting");

    // TODO: Replace with actual API call
    console.log("Form submitted:", formData);

    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({ name: "", email: "", message: "" });
    }, 1000);
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
              aria-describedby={formErrors.name ? "name-error" : undefined}
              aria-invalid={!!formErrors.name}
              className={`w-full rounded-md border bg-background px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                formErrors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              }`}
              placeholder="Your name"
            />
            {formErrors.name && (
              <p
                id="name-error"
                role="alert"
                className="mt-1 text-sm text-red-600"
              >
                {formErrors.name}
              </p>
            )}
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
              aria-describedby={formErrors.email ? "email-error" : undefined}
              aria-invalid={!!formErrors.email}
              className={`w-full rounded-md border bg-background px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                formErrors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              }`}
              placeholder="you@example.com"
            />
            {formErrors.email && (
              <p
                id="email-error"
                role="alert"
                className="mt-1 text-sm text-red-600"
              >
                {formErrors.email}
              </p>
            )}
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
              rows={5}
              aria-describedby={
                formErrors.message ? "message-error" : undefined
              }
              aria-invalid={!!formErrors.message}
              className={`w-full rounded-md border bg-background px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                formErrors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary"
              }`}
              placeholder="How can we help?"
            />
            {formErrors.message && (
              <p
                id="message-error"
                role="alert"
                className="mt-1 text-sm text-red-600"
              >
                {formErrors.message}
              </p>
            )}
          </div>

          {formStatus === "success" && (
            <div
              role="status"
              className="rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-800"
            >
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={formStatus === "submitting"}
          >
            {formStatus === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </Section>
  );
}

export default ContactPage;
