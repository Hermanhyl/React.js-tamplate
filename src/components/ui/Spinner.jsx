/**
 * Animated loading spinner component.
 * Renders a circular CSS spinner using Tailwind's animate-spin utility.
 * @param {Object} props
 * @param {"sm"|"md"|"lg"} [props.size="md"] - Spinner diameter.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element} The spinner element.
 */
function Spinner({ size = "md", className = "", ...props }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`inline-block animate-spin rounded-full border-primary border-t-transparent ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
