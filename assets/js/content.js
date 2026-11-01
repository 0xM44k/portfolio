// Real content only. GH + CONTACT are the single source of truth for links.
export const GH = "0xM44k";
export const CONTACT = "m11k.08k3@gmail.com";

export const PROFILE = {
  name: "Maak",
  full: "Abdulla Hamza",
  role: ["Penetration testing", "Security tooling"],
  location: "Saudi Arabia",
  // Honest academic background (as held) — framed plainly, nothing inflated.
  education: [
    "M.Sc. — Thermo-fluids & Heat Transfer, KFUPM",
    "B.E. — Mechanical Engineering",
  ],
  intro:
    "I build small, auditable command-line tools for security review — MCP configs, lockfiles, cryptography, firewall rules, incident drills and AI-agent memory forensics.",
  about:
    "My academic background is in mechanical and energy engineering; security tooling is the field I build in by choice. Each tool here is a personal project with one clear job, written to be read, run and checked — and honest about what it cannot do.",
  interests: ["Networking", "Linux & operating systems", "Cryptography", "Security research", "Agents & MCP", "Memory forensics"],
};

export const PROJECTS = [
  { id: "mcp-lantern", n: "01", name: "mcp-lantern", kind: "MCP / LLM security",
    tag: "Flags which combinations of your MCP servers can leak data or run injected commands.",
    desc: "Reads an MCP client config offline and reports the cross-server “lethal trifecta” — untrusted input, private data and egress reachable at once — with the smallest change that clears it.",
    tech: ["Python", "SARIF", "HTML report"], cover: "mcp-lantern.webp" },
  { id: "ramnesia", n: "02", name: "ramnesia", kind: "Memory forensics",
    tag: "Carves AI-agent traces — prompts, tool calls, secrets, model identity — out of a memory dump.",
    desc: "Treats the AI agent itself as the subject of a forensic investigation: reconstructs its conversation from heap offsets, recovers model metadata, and redacts secrets by default.",
    tech: ["Python", "Volatility 3", "GGUF"], cover: "ramnesia.webp" },
  { id: "ruleglass", n: "03", name: "ruleglass", kind: "Networking",
    tag: "Analyses iptables rulesets and traces a packet through them — and says UNCERTAIN when it can’t be sure.",
    desc: "Explains plainly why a packet would be accepted or dropped, rule by rule, and refuses to guess where a match can’t be evaluated. Checked against the real Linux kernel.",
    tech: ["Python", "iptables", "netns"], cover: "ruleglass.webp" },
  { id: "scopekeeper", n: "04", name: "scopekeeper", kind: "Authorised testing",
    tag: "A scope guard and tamper-evident log for authorised security testing.",
    desc: "Refuses any command whose target falls outside the written scope or time window, then records what ran in an append-only, hash-chained log that detects edits.",
    tech: ["Python", "SHA-256 chain"], cover: "scopekeeper.webp" },
  { id: "cryptoscan", n: "05", name: "cryptoscan", kind: "Cryptography",
    tag: "Inventories a codebase’s cryptography and ranks what to migrate first for post-quantum.",
    desc: "Finds weak and quantum-vulnerable primitives, ranks them against your own data-lifetime, and exports a CycloneDX-style CBOM and SARIF for dashboards.",
    tech: ["Python", "CBOM", "SARIF"], cover: "cryptoscan.webp" },
  { id: "lockdiff", n: "06", name: "lockdiff", kind: "Supply chain",
    tag: "Diffs two package-lock.json files for tamper signals — offline, not advisories.",
    desc: "Catches an integrity hash that changed while the version stayed the same, a download host moved off the registry, and newly-added install scripts.",
    tech: ["Python", "git", "SARIF"], cover: "lockdiff.webp" },
  { id: "tabletop", n: "07", name: "tabletop", kind: "Blue team",
    tag: "Generates a realistic incident-response tabletop exercise from your own environment.",
    desc: "Turns a short environment file into a full facilitator pack — objectives, roles, timed injects and a gaps table — across seven scenario families.",
    tech: ["Python", "HTML"], cover: "tabletop.webp" },
];
