/**
 * Page section wrapper component.
 * Provides consistent vertical padding and a centered container for content.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Section content.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {string} [props.id] - Section ID for anchor linking.
 * @returns {JSX.Element}
 */
function Section({ children, className = "", id, ...props }) {
  return (
    <section id={id} className={`py-section ${className}`} {...props}>
      <div className="container-wrapper">{children}</div>
    </section>
  );
}

/**
 * Centered section header with a title and optional subtitle.
 * @param {Object} props
 * @param {string} props.title - The section heading text.
 * @param {string} [props.subtitle] - Optional descriptive text below the title.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element}
 */
function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`mx-auto mb-12 max-w-2xl text-center ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}

export { Section, SectionHeader };
