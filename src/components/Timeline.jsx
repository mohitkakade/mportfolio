import { motion } from "framer-motion";
import { GraduationCap, Award, Shield, Network, Zap, Briefcase } from "lucide-react";

const milestones = [
  {
    year: "2023 - Present",
    title: "BBA(CA) in Computer Applications",
    subtitle: "University Undergrad Studies",
    desc: "Acquiring strong foundation in Software Engineering, Database Systems, Operating Systems, and Cryptography. Specializing elective work in network topology and information assurance.",
    icon: GraduationCap,
    category: "edu",
  },
  {
    year: "2024 - Present",
    title: "Offensive Security Platform Training",
    subtitle: "TryHackMe & HackTheBox",
    desc: "Achieved Top 5% global ranking on TryHackMe. Completed learning paths: Junior Penetration Tester, Web Hacking, and Security Operations Center (SOC) Analyst Level 1.",
    icon: Shield,
    category: "lab",
  },
  {
    year: "2025 (Dec)",
    title: "Google Cybersecurity Certification",
    subtitle: "Professional Credential",
    desc: "Completed 8-course intensive program. Mastered security analysis tools including Splunk (SIEM), tcpdump, Wireshark, SQL, Python automations, and Linux shell administration.",
    icon: Award,
    category: "cert",
  },
  {
    year: "2025 - Present",
    title: "Cisco Routing & Switching Lab Practicals",
    subtitle: "CCNA 200-301 Preparation",
    desc: "Building complex networks on Cisco Packet Tracer and physical devices. Testing security measures (ACLs, DHCP Snooping, Port Security) and protocol deployments (OSPF, VLAN trunking).",
    icon: Network,
    category: "net",
  },
  {
    year: "4 Nov 2025 - 30 April 2026",
    title: "Cybersecurity Intern",
    subtitle: "Sumatech Learning Solutions LLP",
    desc: "Completed a 6-month intensive training program. Learned and applied critical skills in core domains including network security, vulnerability assessment, threat analysis, security monitoring, and implementing cybersecurity best practices.",
    icon: Briefcase,
    category: "intern",
  },
];

function Timeline() {
  return (
    <section
      id="timeline"
      className="min-h-screen py-24 px-6 relative bg-cyber-bg/20"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/5 border border-cyber-red/20 text-cyber-red font-mono text-xs mb-3 shadow-neon">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>JOURNEY CHRONOLOGY // AUDIT TRAIL</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Education & <span className="text-cyber-red text-glow">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-red shadow-neon mx-auto" />
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Central Line (hidden on small screens, shown on md+) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-red/20 -translate-x-1/2">
            {/* Glowing active line segment */}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-cyber-red via-cyber-red/50 to-transparent w-full" />
          </div>

          <div className="space-y-12">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row relative items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline icon node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-cyber-bg border-2 border-cyber-red shadow-neon -translate-x-1/2 z-20 flex items-center justify-center top-0 md:top-6">
                    <Icon className="w-4 h-4 text-cyber-red" />
                  </div>

                  {/* Left Spacer (takes space on opposite side for desktop) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.15 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 mt-2 md:mt-0 text-left"
                  >
                    <div className="cyber-glass p-6 rounded-lg relative hover:border-cyber-red/45 transition-all duration-300 group">
                      
                      {/* Interactive edge indicator */}
                      <div className={`absolute top-6 w-3 h-3 bg-cyber-bg border-t border-l border-cyber-red/30 rotate-45 hidden md:block ${
                        isEven ? "-right-[7px] border-r border-b border-t-0 border-l-0" : "-left-[7px]"
                      }`} />

                      {/* Year badge */}
                      <span className="inline-block px-2.5 py-0.5 rounded bg-cyber-red/10 border border-cyber-red/35 text-cyber-red font-mono text-xs font-semibold mb-3">
                        {item.year}
                      </span>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyber-red transition-colors duration-200">
                        {item.title}
                      </h3>
                      
                      <h4 className="text-sm font-mono text-gray-400 mb-4">
                        {item.subtitle}
                      </h4>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Timeline;