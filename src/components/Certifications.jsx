import { motion } from "framer-motion";
import { certs } from "../data/certs";
import { Award, ShieldCheck, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen py-24 px-6 relative cyber-grid bg-cyber-bg/30"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/5 border border-cyber-red/20 text-cyber-red font-mono text-xs mb-3 shadow-neon">
            <Award className="w-3.5 h-3.5" />
            <span>SECURITY CREDENTIALS // RECOGNIZED CERTIFICATIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Professional <span className="text-cyber-red text-glow">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-red shadow-neon mx-auto" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, idx) => {
            const isInProgress = cert.id.includes("PENDING") || cert.date.includes("In Progress");
            
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="cyber-glass rounded-lg p-6 border border-cyber-red/20 flex flex-col justify-between group hover:border-cyber-red/45 transition-all duration-300 relative overflow-hidden text-left"
              >
                {/* Visual Glow Status indicator */}
                <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-35 ${
                  isInProgress ? "bg-yellow-500" : "bg-cyber-red"
                }`} />

                <div className="space-y-4">
                  {/* Top Header line */}
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 rounded bg-cyber-red/10 border border-cyber-red/25 text-cyber-red shadow-neon shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    
                    {/* Status Badge */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] font-semibold tracking-wider ${
                      isInProgress 
                        ? "bg-yellow-500/10 border border-yellow-500/35 text-yellow-400"
                        : "bg-cyber-red/10 border border-cyber-red/35 text-cyber-red shadow-neon"
                    }`}>
                      {isInProgress ? (
                        <>
                          <AlertCircle className="w-3 h-3 animate-pulse" />
                          IN PROGRESS
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          VERIFIED
                        </>
                      )}
                    </span>
                  </div>

                  {/* Cert Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyber-red transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-gray-400 mt-1">
                      Issuer: <span className="text-gray-300">{cert.issuer}</span> | {cert.date}
                    </p>
                  </div>

                  {/* Skills validated */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] text-cyber-red/60 tracking-wider">VALIDATED CAPABILITIES:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-black/40 border border-cyber-red/15 text-[10px] font-mono text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer details & link */}
                <div className="mt-6 pt-4 border-t border-cyber-red/15 flex items-center justify-between">
                  <div className="font-mono text-[10px] text-gray-500">
                    ID: <span className="text-gray-400 font-semibold">{cert.id}</span>
                  </div>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-cyber-red hover:underline hover:text-glow group/btn"
                  >
                    Verify Credential
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Certifications;