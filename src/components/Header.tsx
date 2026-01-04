import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-8 px-6 md:px-12 animate-fade-in">
      {/* Logo */}
      <div className="text-center mb-6">
        <Link to="/" className="logo-text inline-block">
          CELAR
        </Link>
      </div>

      {/* Social Icon */}
      <div className="flex justify-center mb-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram"
        >
          <Instagram size={18} strokeWidth={1.5} />
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center items-center gap-10 md:gap-14">
        <Link to="/" className="nav-link">
          Selected Work
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
