import { Check } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-bg border-t border-cyber-red/20 py-8 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Left: Copyright */}
        <div className="font-mono text-xs text-gray-500">
          <span>&copy; {currentYear} </span>
          <span className="text-gray-400 font-semibold">MOHIT KAKADE</span>
          <span className="text-gray-600"> // CYBERSECURITY PORTFOLIO v1.0.0</span>
        </div>

        {/* Right: Status Code */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/5 border border-cyber-red/15 font-mono text-[10px] text-cyber-red shadow-neon select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-red animate-ping" />
          <Check className="w-3.5 h-3.5 text-cyber-red" />
          <span>ALL SYSTEM INTEGRITY NODES OPERATIONAL [OK]</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;