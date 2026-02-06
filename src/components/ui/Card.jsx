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

function CardHeader({ children, className = "" }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-lg font-semibold text-text ${className}`}>
      {children}
    </h3>
  );
}

function CardDescription({ children, className = "" }) {
  return (
    <p className={`mt-1 text-sm text-text-muted ${className}`}>{children}</p>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
