export type Project = {
  id: string;
  title: string;
  tagline: string;
  image: string;
  badges: string[];
  demoUrl: string;
  repoUrl: string;
};

export type ProjectDetail = Project & {
  description: string;
  problem: string;
  approach: string[];
  techStack: string[];
  screenshots: { src: string; alt: string }[];
};

