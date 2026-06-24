import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { Terminal, Shield, Code } from "lucide-react";

// Function to render terminal-style progress blocks
const renderTerminalProgress = (level) => {
  const totalBlocks = 10;
  const filledBlocks = Math.round(level / 10);
  const emptyBlocks = totalBlocks - filledBlocks;
  
  const filledStr = "█".repeat(filledBlocks);
  const emptyStr = "░".repeat(emptyBlocks);
  
  return (
    <div className="font-mono text-xs text-cyber-red flex justify-between items-center mt-2 bg-black/45 px-3 py-1.5 rounded border border-cyber-red/10">
      <span className="tracking-widest">
        [{filledStr}
        <span className="text-gray-600">{emptyStr}</span>]
      </span>
      <span className="font-semibold text-glow">{level}%</span>
    </div>
  );
};

// Map category index to icons
const getCategoryIcon = (index) => {
  switch (index) {
    case 0:
      return <Shield className="w-5 h-5 text-cyber-red" />;
    case 1:
      return <Terminal className="w-5 h-5 text-cyber-red" />;
    default:
      return <Code className="w-5 h-5 text-cyber-red" />;
  }
};

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 relative cyber-grid bg-cyber-bg/40"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyber-red/5 border border-cyber-red/20 text-cyber-red font-mono text-xs mb-3 shadow-neon"
          >
            <span>ANALYZING CORE SYSTEM CAPABILITIES</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2"
          >
            Skill <span className="text-cyber-red text-glow">Matrix</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-cyber-red shadow-neon mx-auto"
          />
        </div>

        {/* Skill Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIdx * 0.15 }}
              className="cyber-glass rounded-lg p-6 flex flex-col relative overflow-hidden group border border-cyber-red/25"
            >
              {/* Card top light glow */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-cyber-red/20 group-hover:bg-cyber-red transition-all duration-300" />

              {/* Title & Icon */}
              <div className="flex items-center gap-3 border-b border-cyber-red/20 pb-4 mb-6">
                <div className="p-2 rounded bg-cyber-red/10 border border-cyber-red/20 shadow-neon">
                  {getCategoryIcon(catIdx)}
                </div>
                <h3 className="font-mono text-base font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5 flex-1">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/item">
                    <div className="flex justify-between items-center text-sm font-semibold text-gray-300 group-hover/item:text-cyber-red transition-colors duration-200">
                      <span>{skill.name}</span>
                    </div>
                    {renderTerminalProgress(skill.level)}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;