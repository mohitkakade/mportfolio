import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { Shield, ExternalLink, X, ShieldAlert, Cpu, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 relative bg-cyber-bg/50"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/5 border border-cyber-red/20 text-cyber-red font-mono text-xs mb-3 shadow-neon">
            <Terminal className="w-3.5 h-3.5" />
            <span>PROJECT REPOSITORY // SECURE RELEASES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Featured <span className="text-cyber-red text-glow">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-red shadow-neon mx-auto" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="cyber-glass rounded-lg overflow-hidden flex flex-col h-full border border-cyber-red/20 group hover:border-cyber-red/45 transition-all duration-300"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video overflow-hidden border-b border-cyber-red/20 bg-black/45">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg to-transparent opacity-60" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 text-left space-y-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-cyber-red/10 border border-cyber-red/25 text-[10px] font-mono text-cyber-red"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-gray-700 text-[10px] font-mono text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyber-red transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.desc}
                </p>

                {/* Inspect Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 font-mono text-xs font-semibold rounded bg-cyber-red/10 border border-cyber-red/35 text-cyber-red hover:bg-cyber-red hover:text-black transition-all duration-300 text-center"
                >
                  Analyze Code
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl h-[85vh] md:h-auto md:max-h-[90vh] bg-cyber-dark border border-cyber-red rounded-lg shadow-neon-strong overflow-hidden flex flex-col z-10"
              >
                {/* Header */}
                <div className="bg-cyber-bg border-b border-cyber-red/20 px-6 py-4 flex justify-between items-center shrink-0">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyber-red text-glow">
                    <Shield className="w-4 h-4" />
                    <span>[SECURE-FILE-DECRYPTION: {selectedProject.title.toLowerCase().replace(/\s+/g, "_")}.md]</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1 rounded bg-cyber-red/10 border border-cyber-red/25 text-cyber-red hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/40 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Content (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-left scrollbar-thin">
                  
                  {/* Top Split Section: Image & Basic details */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-6 aspect-video bg-black/45 rounded overflow-hidden border border-cyber-red/25">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-6 space-y-4">
                      <h3 className="text-2xl font-bold text-white">
                        {selectedProject.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProject.desc}
                      </p>
                      
                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded bg-cyber-red/10 border border-cyber-red/25 text-xs font-mono text-cyber-red"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Problem & Solution block */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-cyber-red/15">
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs text-red-400 font-semibold tracking-wider flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        PROBLEM STATEMENT
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {selectedProject.details.problem}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs text-cyber-red font-semibold tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        SOLUTION IMPLEMENTED
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {selectedProject.details.solution}
                      </p>
                    </div>
                  </div>

                  {/* Core Features */}
                  <div className="space-y-2 pt-4 border-t border-cyber-red/15">
                    <h4 className="font-mono text-xs text-cyber-red font-semibold tracking-wider">
                      SYSTEM CAPABILITIES & FEATURES
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-cyber-red font-mono select-none mt-0.5">&gt;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Security Target Callout */}
                  <div className="p-4 bg-cyber-red/5 border border-cyber-red/20 rounded-lg space-y-1.5">
                    <h4 className="font-mono text-xs text-cyber-red font-semibold tracking-wider flex items-center gap-2">
                      <Shield className="w-4 h-4 animate-pulse" />
                      SECURITY AUDIT & IMPACT FOCUS
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedProject.details.securityFocus}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="bg-cyber-bg border-t border-cyber-red/20 px-6 py-4 flex justify-end gap-3 shrink-0">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs font-semibold rounded bg-cyber-red/10 border border-cyber-red/25 text-cyber-red hover:bg-cyber-red/25 transition-all duration-200"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs font-semibold rounded bg-cyber-red text-black border border-cyber-red hover:bg-transparent hover:text-cyber-red transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;