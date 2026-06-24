import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, Terminal, Cpu, Award, Briefcase, Mail, User } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: Terminal },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Journey", href: "#timeline", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Shield },
  { name: "Certs", href: "#certifications", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to update active section based on viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Trigger when section occupies the center of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-red/20 shadow-neon"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group font-mono text-xl font-bold text-white tracking-widest"
          >
            <Shield className="w-6 h-6 text-cyber-red group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_8px_#ff003c]" />
            <span>
              MOHIT<span className="text-cyber-red text-glow">.SEC</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 flex items-center gap-1.5 rounded-md transition-all duration-300 hover:text-cyber-red ${
                      isActive
                        ? "text-cyber-red font-semibold"
                        : "text-gray-400"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-cyber-red/10 border border-cyber-red/35 rounded-md shadow-neon z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon className="w-4 h-4 z-10" />
                    <span className="z-10">{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-cyber-red focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-cyber-red" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[57px] left-0 w-full bg-cyber-bg/95 backdrop-blur-lg border-b border-cyber-red/30 shadow-neon-strong z-40 md:hidden"
          >
            <ul className="flex flex-col p-6 gap-4 font-mono text-base">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-md border ${
                        isActive
                          ? "bg-cyber-red/10 border-cyber-red/40 text-cyber-red shadow-neon"
                          : "border-transparent text-gray-400 hover:text-cyber-red hover:border-cyber-red/20"
                      } transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;