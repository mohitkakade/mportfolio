import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Terminal, Send, Key, Wifi, MapPin } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honey: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusText, setStatusText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required telemetry fields.");
      return;
    }

    // Bot protection check
    if (formData._honey) {
      // Silently discard and reset
      setFormData({ name: "", email: "", subject: "", message: "", _honey: "" });
      toast.success("Secure transmission dispatched successfully!");
      return;
    }

    setIsSending(true);
    
    // Simulate encryption and routing sequence
    setStatusText("ENCRYPTING PAYLOAD...");
    await new Promise((r) => setTimeout(r, 1200));
    
    setStatusText("ESTABLISHING VPN TUNNEL...");
    await new Promise((r) => setTimeout(r, 1000));
    
    setStatusText("TRANSMITTING TO GATEWAY...");
    await new Promise((r) => setTimeout(r, 800));

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "fe94978f-630f-4d5a-8811-b7d6632432d5";
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject ? `Portfolio: ${formData.subject}` : "New Contact Form Message",
          message: formData.message,
        })
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        toast.success("Secure transmission dispatched successfully!");
        setFormData({ name: "", email: "", subject: "", message: "", _honey: "" });
      } else {
        toast.error(resData.message || "Transmission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Network error. Could not connect to transmission server.");
    } finally {
      setIsSending(false);
      setStatusText("");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 relative bg-cyber-bg/40"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/5 border border-cyber-red/20 text-cyber-red font-mono text-xs mb-3 shadow-neon">
            <Key className="w-3.5 h-3.5 animate-pulse" />
            <span>ESTABLISH SECURE LINK // CONNECT WITH PRACTITIONER</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Contact <span className="text-cyber-red text-glow">Me</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-red shadow-neon mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Telemetry Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 cyber-glass rounded-lg p-6 md:p-8 flex flex-col justify-between border border-cyber-red/20"
          >
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono tracking-wider">
                  COMMUNICATION TELEMETRY
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send an encrypted query directly to my inbox. All transmission paths are logged and secured.
                </p>
              </div>

              {/* Status parameters */}
              <div className="space-y-4 font-mono text-xs text-gray-300">
                <div className="flex items-center gap-3 bg-black/30 p-3 rounded border border-cyber-red/10">
                  <Wifi className="w-4 h-4 text-cyber-red" />
                  <div>
                    <div className="text-gray-500 font-semibold">PROTOCOL</div>
                    <div className="text-cyber-red">SSH / TLS SECURED (PORT 443)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-black/30 p-3 rounded border border-cyber-red/10">
                  <MapPin className="w-4 h-4 text-cyber-red" />
                  <div>
                    <div className="text-gray-500 font-semibold">LOCATION GRID</div>
                    <div className="text-gray-300">Mumbai, Maharashtra, India</div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 bg-black/30 p-3 rounded border border-cyber-red/10">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyber-red" />
                    <span className="text-gray-500 font-semibold">PUBLIC GPG KEY</span>
                  </div>
                  <pre className="text-[10px] text-gray-500 overflow-x-auto leading-tight bg-black/50 p-2 rounded">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2.2.40 (GNU/Linux)
mQINBFT3sPUBEADmZ/9f1dK0B+9D...
...a6B1+GvPz8eXQ4S7r0m=h7z8
-----END PGP PUBLIC KEY BLOCK-----`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-6 border-t border-cyber-red/15 text-left">
              <span className="font-mono text-xs text-cyber-red/60 block mb-4">DIRECT CHANNELS:</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mohit-kakade"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded bg-cyber-red/10 border border-cyber-red/20 text-cyber-red hover:bg-cyber-red hover:text-black transition-all duration-300 shadow-neon-button"
                  title="Github"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/mohit-kakade"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded bg-cyber-red/10 border border-cyber-red/20 text-cyber-red hover:bg-cyber-red hover:text-black transition-all duration-300 shadow-neon-button"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="mailto:kakademohit10@gmail.com"
                  className="p-3 rounded bg-cyber-red/10 border border-cyber-red/20 text-cyber-red hover:bg-cyber-red hover:text-black transition-all duration-300 shadow-neon-button"
                  title="Email"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Secure Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 cyber-glass rounded-lg p-6 md:p-8 flex flex-col justify-between border border-cyber-red/20 relative overflow-hidden"
          >
            {/* Form loading state overlay */}
            {isSending && (
              <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-cyber-red/30 border-t-cyber-red rounded-full animate-spin" />
                <div className="font-mono text-xs text-cyber-red text-glow animate-pulse">
                  {statusText}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 text-left flex flex-col justify-between h-full">
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2 font-mono tracking-wider">
                  SECURE TRANSMISSION CHANNEL
                </h3>
                
                {/* Name */}
                <div className="space-y-1.5 font-mono">
                  <label className="text-xs text-gray-400 flex justify-between">
                    <span>NAME (IDENTIFIER) *</span>
                    <span className="text-gray-600">[STR]</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-cyber-red text-xs font-semibold select-none">&gt;</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full pl-8 pr-4 py-2.5 bg-black/45 border border-cyber-red/20 rounded focus:border-cyber-red focus:ring-0 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5 font-mono">
                  <label className="text-xs text-gray-400 flex justify-between">
                    <span>EMAIL (RETURN ROUTING) *</span>
                    <span className="text-gray-600">[MAIL]</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-cyber-red text-xs font-semibold select-none">&gt;</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                      className="w-full pl-8 pr-4 py-2.5 bg-black/45 border border-cyber-red/20 rounded focus:border-cyber-red focus:ring-0 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5 font-mono">
                  <label className="text-xs text-gray-400 flex justify-between">
                    <span>SUBJECT (METADATA)</span>
                    <span className="text-gray-600">[STR]</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-cyber-red text-xs font-semibold select-none">&gt;</span>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Transmission topic"
                      className="w-full pl-8 pr-4 py-2.5 bg-black/45 border border-cyber-red/20 rounded focus:border-cyber-red focus:ring-0 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5 font-mono">
                  <label className="text-xs text-gray-400 flex justify-between">
                    <span>MESSAGE BODY *</span>
                    <span className="text-gray-600">[TXT]</span>
                  </label>
                  <div className="relative flex items-start">
                    <span className="absolute left-3 top-3 text-cyber-red text-xs font-semibold select-none">&gt;</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter encrypted payload..."
                      rows={5}
                      required
                      className="w-full pl-8 pr-4 py-2.5 bg-black/45 border border-cyber-red/20 rounded focus:border-cyber-red focus:ring-0 focus:outline-none text-white text-sm transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="_honey"
                  value={formData._honey}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  autoComplete="off"
                />
              </div>

              {/* Submit btn */}
              <button
                type="submit"
                className="w-full mt-4 py-3 font-mono text-xs font-bold rounded bg-cyber-red text-black border border-cyber-red shadow-neon-button hover:bg-transparent hover:text-cyber-red transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                EXECUTE TRANSMISSION //
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;