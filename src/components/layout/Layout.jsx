import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Page layout wrapper component.
 * Renders a persistent Header and Footer around the active route's content
 * using React Router's Outlet. Ensures a full-height flex layout.
 * @returns {JSX.Element} The page layout with header, main content, and footer.
 */
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
