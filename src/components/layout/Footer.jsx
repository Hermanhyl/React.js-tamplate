import { Link } from "react-router-dom";

/**
 * Site footer component.
 * Displays a multi-column grid with brand info, page links, resource links,
 * and social/contact links. Includes a dynamic copyright year.
 * @returns {JSX.Element} The site footer.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-wrapper py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Link to="/" className="text-lg font-bold text-primary">
              ProjectName
            </Link>
            <p className="mt-2 text-sm text-text-muted">
              A short description of the project goes here. Replace this with
              your own content.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 — Replace href values with your own URLs */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://example.com/docs"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/support"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/privacy"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Contact Column — Replace href values with your own URLs */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@example.com"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  hello@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-text-muted">
          &copy; {currentYear} ProjectName. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
