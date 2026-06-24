import { motion, useScroll, useSpring } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-cyber-bg text-white min-h-screen overflow-x-hidden select-none selection:bg-cyber-red selection:text-white">
      {/* Top glowing scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-cyber-red origin-left z-[60] shadow-[0_0_10px_#ff003c]"
        style={{ scaleX }}
      />

      {/* Navigation menu */}
      <Navbar />

      {/* Main content grid */}
      <main className="space-y-0">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer info panel */}
      <Footer />

      {/* Notification system toast configurations */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="border border-cyber-red/35 !bg-cyber-card font-mono text-xs text-cyber-red shadow-neon"
        bodyClassName="text-cyber-red font-mono"
        progressClassName="!bg-cyber-red"
      />
    </div>
  );
}

export default App;