import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, Server } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 px-6 overflow-hidden scanlines cyber-grid"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-red/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left text column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7 space-y-6 text-left"
        >
          {/* Status Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-red/10 border border-cyber-red/35 text-cyber-red font-mono text-xs shadow-neon">
            <span className="w-2 h-2 rounded-full bg-cyber-red animate-ping" />
            <span className="tracking-wider">SYSTEM INITIATED // PORTFOLIO_V1.0</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-cyber-red text-glow-strong font-mono">MOHIT</span>
          </h1>

          <div className="font-mono text-xl md:text-2xl text-gray-300 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyber-red shrink-0" />
            <TypeAnimation
              sequence={[
                "Ethical Hacker",
                2000,
                "Cybersecurity Analyst",
                2000,
                "Network Security Learner",
                2000,
                "Linux Enthusiast",
                2000,
              ]}
              repeat={Infinity}
              className="text-cyber-red text-glow"
            />
          </div>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            BBA(CA) student passionate about securing networks, investigating vulnerabilities, and building robust, defense-in-depth security architectures.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm font-semibold rounded bg-cyber-red text-black border border-cyber-red shadow-neon-button hover:bg-transparent hover:text-cyber-red transition-all duration-300 group"
            >
              Initiate Scan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm font-semibold rounded bg-transparent text-cyber-red border border-cyber-red/40 hover:border-cyber-red hover:shadow-neon hover:bg-cyber-red/5 transition-all duration-300"
            >
              Establish Link
              <Server className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right graphic column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Animated rotating outer radar ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-cyber-red/30"
            />
            {/* Animated rotating middle radar ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-double border-cyber-red/20"
            />
            {/* Circular glowing accent */}
            <div className="absolute inset-8 rounded-full bg-cyber-red/5 blur-md" />

            {/* Profile Avatar Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-cyber-red shadow-neon-strong group">
              <img
                src="/profile.png"
                alt="Mohit Kakade Avatar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Scanline line animation that sweeps down */}
              <div className="absolute inset-x-0 top-0 h-1 bg-cyber-red/75 shadow-[0_0_10px_#ff003c] animate-sweep pointer-events-none" style={{ animationDuration: '4s' }} />
            </div>

            {/* Cyber tags positioned around the circle */}
            <div className="absolute top-2 right-2 font-mono text-[10px] text-cyber-red/60 bg-cyber-bg/80 px-2 py-0.5 border border-cyber-red/25 rounded backdrop-blur-sm">
              LATENCY: 14ms
            </div>
            <div className="absolute bottom-2 left-2 font-mono text-[10px] text-cyber-red/60 bg-cyber-bg/80 px-2 py-0.5 border border-cyber-red/25 rounded backdrop-blur-sm">
              SHIELD: ACTIVE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;