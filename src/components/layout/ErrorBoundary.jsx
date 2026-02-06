import { Component } from "react";
import Button from "../ui/Button";

/**
 * Error boundary component.
 * Catches JavaScript errors in its child component tree, logs them, and
 * renders a fallback UI instead of crashing the entire application.
 * Must be a class component — React error boundaries require
 * getDerivedStateFromError which is not available as a hook.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to wrap.
 * @param {React.ReactNode} [props.fallback] - Optional custom fallback UI.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /**
   * Update state when a child component throws an error.
   * @param {Error} error - The error that was thrown.
   * @returns {{ hasError: boolean, error: Error }}
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /**
   * Log error details for debugging.
   * @param {Error} error - The error that was thrown.
   * @param {{ componentStack: string }} errorInfo - Component stack trace.
   */
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="text-center">
            <p className="text-6xl font-bold text-primary">Oops</p>
            <h1 className="mt-4 text-2xl font-bold text-text">
              Something went wrong
            </h1>
            <p className="mt-2 text-text-muted">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <div className="mt-8">
              <Button onClick={() => window.location.reload()}>
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
