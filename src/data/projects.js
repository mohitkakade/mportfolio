export const projects = [
  {
    title: "Threaded Port Scanner",
    desc: "A multi-threaded Python scanner designed to rapidly identify open ports and services running on a target host.",
    image: "/project1.png",
    tags: ["Python", "Socket Programming", "Threading", "Network Security"],
    githubUrl: "https://github.com/mohit-kakade/threaded-port-scanner",
    liveUrl: "#",
    details: {
      problem: "Standard port scanners like Nmap can be slow without proper tuning, especially when traversing large port ranges.",
      solution: "Developed a custom python utility utilizing socket timeout controls and a thread pool executor to scan 1000 ports in less than 3 seconds.",
      features: [
        "Concurrent execution using Python's ThreadPoolExecutor",
        "Banner grabbing to identify service versions",
        "DNS resolution for hostnames",
        "Configurable socket timeouts to prevent hanging threads"
      ],
      securityFocus: "Helps administrators conduct swift auditing of perimeter devices to identify unauthorized open ports and shadow services."
    }
  },
  {
    title: "Password Strength Analyzer",
    desc: "A cryptographic password strength evaluator that performs entropy calculations and checks for common pattern leaks.",
    image: "/project2.png",
    tags: ["React", "JavaScript", "SHA-1 hashing", "Pwned Passwords API"],
    githubUrl: "https://github.com/mohit-kakade/password-strength-analyzer",
    liveUrl: "#",
    details: {
      problem: "Traditional strength meters rely solely on regex rules (e.g., must contain numbers/caps) which doesn't reflect actual password entropy.",
      solution: "Built a React tool calculating Shannon Entropy and integrating the HIBP 'Pwned Passwords' API (using k-Anonymity) to check if a password has been leaked.",
      features: [
        "Real-time Shannon Entropy computation (bits of strength)",
        "Zero-trust API lookup using SHA-1 prefix hashing (k-Anonymity model)",
        "Brute force duration estimation based on current GPU hashes/sec",
        "Vulnerability detection for dictionary words and repeating sequences"
      ],
      securityFocus: "Demonstrates secure API communication principles (never sending plain passwords over the wire) and authentic user security assessment."
    }
  },
  {
    title: "Packet Sniffer & Monitor",
    desc: "A raw socket network packet analysis tool that captures traffic, parses protocols, and warns of security anomalies.",
    image: "/project3.png",
    tags: ["Python", "Scapy", "Tkinter GUI", "Network Analysis"],
    githubUrl: "https://github.com/mohit-kakade/network-packet-sniffer",
    liveUrl: "#",
    details: {
      problem: "Wireshark is comprehensive but can be overwhelming for beginners who need to isolate specific malicious network signatures.",
      solution: "Wrote a lightweight Scapy-based sniffer with a clean dashboard focusing on capturing ARP, ICMP, DNS, and HTTP packets, prompting alerts on threat indicators.",
      features: [
        "Real-time packet capture and decoding (IP, MAC, Ports)",
        "ARP Spoofing detection (notifies if duplicate MACs are detected for different IPs)",
        "DNS query logger to audit local host lookups",
        "Color-coded logs categorizing packet types and severity warnings"
      ],
      securityFocus: "Implements intrusion detection logic for local networks, demonstrating understanding of Layer 2 and Layer 3 networking threats."
    }
  }
];