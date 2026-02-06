/**
 * Card container component.
 * Renders a bordered, rounded card with hover shadow effect.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element} The card wrapper.
 */
function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-lg border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card header section with bottom margin spacing.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Header content (typically title and description).
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element}
 */
function CardHeader({ children, className = "" }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

/**
 * Card title rendered as an h3 heading.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Title text.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element}
 */
function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-lg font-semibold text-text ${className}`}>
      {children}
    </h3>
  );
}

/**
 * Card description text displayed below the title.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Description text.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element}
 */
function CardDescription({ children, className = "" }) {
  return (
    <p className={`mt-1 text-sm text-text-muted ${className}`}>{children}</p>
  );
}

/**
 * Card body content area.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Body content.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element}
 */
function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
