import { Link } from "react-router-dom";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-text-muted hover:text-text hover:bg-surface",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

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
