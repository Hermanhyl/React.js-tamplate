function Section({ children, className = "", id, ...props }) {
  return (
    <section id={id} className={`py-section ${className}`} {...props}>
      <div className="container-wrapper">{children}</div>
    </section>
  );
}

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
