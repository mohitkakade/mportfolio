import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const commands = {
  "cat whoami.txt": [
    "NAME: MOHIT KAKADE",
    "ROLE: Cybersecurity Practitioner & Network Specialist",
    "STATUS: BBA(CA) GRADUATED / TRYHACKME TOP 5% RANKED",
    "MISSION: Securing digital infrastructures and defending against adversarial tactics.",
    "Interests: Pentesting, digital forensics, routing/switching, security auditing.",
  ],
  neofetch: [
    "       .---.       OS: Arch Linux x86_64 / Kali Linux",
    "      /     \\      Host: Cybersecurity Analyst Workstation",
    "      \\  o  /      Kernel: 6.8.0-kali1-amd64",
    "       `---'       Uptime: 24 days, 6 hours",
    "      /     \\      Shell: zsh 5.9",
    "     |   O   |     Terminal: Kitty",
    "     |  /|\\  |     Education: BBA(CA) in Computer Applications (2022 - 2025)",
    "      \\_|_/_/      THM Rank: Top 5% (Mohit_THM)",
    "                   Certifications: Google CyberSec, CCNA (Prepping)",
  ],
  "cat goals.log": [
    "SHORT-TERM GOALS:",
    "[1] Complete CCNA Routing & Switching exam certification.",
    "[2] Conduct advanced vulnerability research on IoT protocols.",
    "[3] Contribute to open-source intrusion detection scripts.",
    "LONG-TERM GOALS:",
    "[-] Transition into a dedicated Security Analyst or Security Engineer role.",
  ],
};

function About() {
  const [consoleLogs, setConsoleLogs] = useState([
    "System online. Secure SSH session established.",
    "Type or click a command below to scan the node profile.",
  ]);

  const handleCommand = (cmd) => {
    if (cmd === "clear") {
      setConsoleLogs([]);
      return;
    }
    
    const output = commands[cmd] || ["Command not found. Type 'help' for options."];
    setConsoleLogs((prev) => [
      ...prev,
      `guest@mohit_sec:~$ ${cmd}`,
      ...output,
      "",
    ]);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left column: Bio & Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-2">
              About <span className="text-cyber-red text-glow">Me</span>
            </h2>
            <div className="h-1 w-20 bg-cyber-red shadow-neon" />
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            I am a BBA(CA) student focusing heavily on threat detection, network administration, and secure programming. I look at networks as puzzles waiting to be fortified.
          </p>

          <p className="text-gray-400 leading-relaxed">
            By blending analytical thinking with hands-on lab training on TryHackMe and Cisco Packet Tracer, I build a strong understanding of how modern cyber defense works.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-cyber-dark/60 border border-cyber-red/20 rounded-lg cyber-glass-hover">
              <div className="text-3xl font-mono font-bold text-cyber-red text-glow mb-1">Top 5%</div>
              <div className="text-xs font-mono text-gray-400">TryHackMe Ranking</div>
            </div>
            <div className="p-4 bg-cyber-dark/60 border border-cyber-red/20 rounded-lg cyber-glass-hover">
              <div className="text-3xl font-mono font-bold text-cyber-red text-glow mb-1">500+</div>
              <div className="text-xs font-mono text-gray-400">Security Lab Hours</div>
            </div>
            <div className="p-4 bg-cyber-dark/60 border border-cyber-red/20 rounded-lg cyber-glass-hover">
              <div className="text-3xl font-mono font-bold text-cyber-red text-glow mb-1">20+</div>
              <div className="text-xs font-mono text-gray-400">Network Scenarios Solved</div>
            </div>
            <div className="p-4 bg-cyber-dark/60 border border-cyber-red/20 rounded-lg cyber-glass-hover">
              <div className="text-3xl font-mono font-bold text-cyber-red text-glow mb-1">4+</div>
              <div className="text-xs font-mono text-gray-400">Credentials Earned</div>
            </div>
          </div>
        </motion.div>

        {/* Right column: Terminal Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col h-[520px] rounded-lg border border-cyber-red/30 bg-cyber-dark/85 shadow-neon-strong overflow-hidden"
        >
          {/* Terminal Window Header */}
          <div className="bg-[#020617] border-b border-cyber-red/20 px-4 py-3 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-xs text-gray-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyber-red" />
              guest@mohit_sec:~
            </div>
            <div className="w-12" /> {/* spacer */}
          </div>

          {/* Terminal Window Output */}
          <div className="flex-1 p-6 overflow-y-auto font-mono text-sm text-gray-300 space-y-1.5 scrollbar-thin text-left bg-black/45">
            {consoleLogs.map((log, idx) => {
              if (log.startsWith("guest@mohit_sec:~$")) {
                return (
                  <div key={idx} className="text-cyber-red font-semibold pt-2">
                    {log}
                  </div>
                );
              }
              return <div key={idx} className="whitespace-pre">{log}</div>;
            })}
            
            {/* Terminal blinking prompt input */}
            <div className="flex items-center gap-1 text-cyber-red pt-1">
              <span>guest@mohit_sec:~$</span>
              <span className="w-2.5 h-4 bg-cyber-red cursor-blink" />
            </div>
          </div>

          {/* Terminal Button Panel / Actions */}
          <div className="bg-[#020617] border-t border-cyber-red/20 p-4 shrink-0 flex flex-wrap gap-2.5">
            <button
              onClick={() => handleCommand("cat whoami.txt")}
              className="px-3.5 py-1.5 rounded bg-cyber-red/10 border border-cyber-red/20 hover:border-cyber-red hover:bg-cyber-red/20 text-cyber-red font-mono text-xs transition-all duration-200"
            >
              cat whoami.txt
            </button>
            <button
              onClick={() => handleCommand("neofetch")}
              className="px-3.5 py-1.5 rounded bg-cyber-red/10 border border-cyber-red/20 hover:border-cyber-red hover:bg-cyber-red/20 text-cyber-red font-mono text-xs transition-all duration-200"
            >
              neofetch
            </button>
            <button
              onClick={() => handleCommand("cat goals.log")}
              className="px-3.5 py-1.5 rounded bg-cyber-red/10 border border-cyber-red/20 hover:border-cyber-red hover:bg-cyber-red/20 text-cyber-red font-mono text-xs transition-all duration-200"
            >
              cat goals.log
            </button>
            <button
              onClick={() => handleCommand("clear")}
              className="ml-auto px-3.5 py-1.5 rounded bg-red-950/20 border border-red-500/20 hover:border-red-500 hover:bg-red-500/20 text-red-400 font-mono text-xs transition-all duration-200"
            >
              clear
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;