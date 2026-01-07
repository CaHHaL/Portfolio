import Image from "next/image";
// Removed unused Link import
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import type { Metadata } from "next";
import ClientProjectDetail from "./ClientProjectDetail";
import type { ProjectDetail } from "@/types/project";

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "malware-detection": {
    id: "malware-detection",
    title: "Malware Behavior Detection",
    tagline:
      "Sandbox telemetry + behavior scoring to surface anomalous process chains without executing dangerous payloads.",
    image: "/projects/malware-detection.jpg",
    badges: ["Behavioral AI", "EDR"],
    demoUrl: "https://example.com/malware-detection-demo",
    repoUrl: "https://github.com/cahalagarwalla/malware-behavior-detection",
    description:
      "Telemetry-driven behavioral scoring engine that highlights anomalous process chains while staying clear of unsafe payloads.",
    problem:
      "SOC analysts lacked explainable signals to triage suspicious processes quickly without detonating dangerous samples.",
    approach: [
      "Captured safe sandbox telemetry and enriched it with MITRE ATT&CK annotations.",
      "Designed heuristics + ML scoring that explained why a process tree was risky.",
      "Built analyst-friendly dashboards for sharing sanitized timelines with leadership."
    ],
    techStack: ["Python", "FastAPI", "Kafka", "Grafana"],
    screenshots: [
      {
        src: "/projects/malware-detection-1.jpg",
        alt: "Behavior scoring dashboard"
      },
      {
        src: "/projects/malware-detection-2.jpg",
        alt: "Process chain visualization"
      }
    ]
  },
  "hash-lab": {
    id: "hash-lab",
    title: "Password Hash Extraction & Cracking (Sanitized)",
    tagline:
      "Compliance-friendly lab that demonstrates credential-hardening guidance using anonymized hashes and safe tooling walkthroughs.",
    image: "/projects/hash-lab.jpg",
    badges: ["Blue Team", "Education"],
    demoUrl: "https://example.com/hash-lab",
    repoUrl: "https://github.com/cahalagarwalla/hash-lab",
    description:
      "Educational lab with anonymized artifacts that demonstrates why strong hashing and monitoring matter.",
    problem:
      "Many teams lacked a compliant, safe way to teach why weak password policies fail under realistic pressure.",
    approach: [
      "Provided anonymized sample hashes and safe walkthroughs of discovery steps.",
      "Mapped each stage to corporate policy updates and hardening recommendations.",
      "Delivered executive-friendly reporting backed by sanitized, reproducible data."
    ],
    techStack: ["Node.js", "Next.js", "Tailwind", "Docker"],
    screenshots: [
      { src: "/projects/hash-lab-1.jpg", alt: "Lab overview screen" },
      {
        src: "/projects/hash-lab-2.jpg",
        alt: "Credential hygiene recommendations"
      }
    ]
  },
  "vulnerable-web-app": {
    id: "vulnerable-web-app",
    title: "Vulnerable Web App",
    tagline:
      "Intentionally insecure portal used to teach secure coding patterns with sanitized attack narratives and mitigations.",
    image: "/projects/vwa.jpg",
    badges: ["AppSec", "Training"],
    demoUrl: "https://example.com/vulnerable-web-app",
    repoUrl: "https://github.com/cahalagarwalla/vulnerable-web-app",
    description:
      "Sanitized training portal with intentionally insecure flows to teach developers secure coding patterns.",
    problem:
      "Developers needed immersive, but safe, scenarios to understand how common flaws appear and how to patch them.",
    approach: [
      "Implemented common vulnerability patterns with toggles for fixes.",
      "Paired each scenario with remediation playbooks and checklists.",
      "Instrumented analytics to measure how quickly fixes roll out after workshops."
    ],
    techStack: ["Next.js", "Prisma", "PostgreSQL", "OWASP Juice Shop data"],
    screenshots: [
      { src: "/projects/vwa-1.jpg", alt: "Lesson overview" },
      { src: "/projects/vwa-2.jpg", alt: "Mitigation checklist" }
    ]
  }
};

export function generateMetadata({
  params
}: {
  params: { id: string };
}): Metadata {
  const project = PROJECT_DETAILS[params.id];
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Cahal Agarwalla`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.screenshots.map((shot) => ({
        url: shot.src,
        alt: shot.alt
      }))
    }
  };
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = PROJECT_DETAILS[params.id];
  if (!project) {
    notFound();
  }
  return <ClientProjectDetail project={project} />;
}

function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 400 220"
      role="img"
      aria-label="Architecture flow showing data intake, analysis, and reporting."
    >
      <defs>
        <linearGradient id="line" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#4de1ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4de1ff" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <rect x="10" y="30" width="110" height="60" rx="12" fill="#081230" stroke="#4de1ff" strokeWidth="2" />
      <text x="65" y="65" textAnchor="middle" fill="#d4f5ff" fontSize="12">
        Data Intake
      </text>
      <rect x="150" y="30" width="110" height="60" rx="12" fill="#081230" stroke="#4de1ff" strokeWidth="2" />
      <text x="205" y="65" textAnchor="middle" fill="#d4f5ff" fontSize="12">
        Scoring Engine
      </text>
      <rect x="290" y="30" width="110" height="60" rx="12" fill="#081230" stroke="#4de1ff" strokeWidth="2" />
      <text x="345" y="65" textAnchor="middle" fill="#d4f5ff" fontSize="12">
        Analyst Dashboards
      </text>
      <line x1="120" y1="60" x2="150" y2="60" stroke="url(#line)" strokeWidth="3" markerEnd="url(#arrow)" />
      <line x1="260" y1="60" x2="290" y2="60" stroke="url(#line)" strokeWidth="3" markerEnd="url(#arrow)" />
      <rect x="150" y="130" width="110" height="60" rx="12" fill="#081230" stroke="#4de1ff" strokeWidth="2" />
      <text x="205" y="165" textAnchor="middle" fill="#d4f5ff" fontSize="12">
        Reporting API
      </text>
      <line x1="205" y1="90" x2="205" y2="130" stroke="url(#line)" strokeWidth="3" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#4de1ff" />
        </marker>
      </defs>
    </svg>
  );
}

