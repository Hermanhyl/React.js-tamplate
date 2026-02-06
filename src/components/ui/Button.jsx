import { Link } from "react-router-dom";

/** @type {Object<string, string>} Tailwind class maps for each button style variant. */
const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-text-muted hover:text-text hover:bg-surface",
};

/** @type {Object<string, string>} Tailwind class maps for each button size. */
const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

/**
 * Polymorphic button component.
 * Renders as a React Router `<Link>` when `to` is provided, an `<a>` tag
 * when `href` is provided, or a native `<button>` otherwise.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content.
 * @param {"primary"|"secondary"|"outline"|"ghost"} [props.variant="primary"] - Visual style variant.
 * @param {"sm"|"md"|"lg"} [props.size="md"] - Size variant.
 * @param {string} [props.to] - Internal route path (renders as React Router Link).
 * @param {string} [props.href] - External URL (renders as anchor tag).
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element} The rendered button, link, or anchor element.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const baseStyles = `inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseStyles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
}

export default Button;
