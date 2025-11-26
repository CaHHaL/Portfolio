"use client";

import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

const DEFAULT_URL = "https://www.example.com";
const DEFAULT_IMAGE = "/og-image.png";

export default function SEO({
  title,
  description,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE
}: SEOProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cahal Agarwalla",
    jobTitle: "Cybersecurity Enthusiast",
    url,
    image,
    sameAs: [
      "https://www.linkedin.com/in/cahal-agarwalla",
      "https://github.com/CaHHaL",
      "https://x.com/CahalAgarwalla"
    ],
    knowsAbout: [
      "penetration testing",
      "security analysis",
      "digital forensics",
      "red teaming"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent / Community Initiatives"
    },
    description
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </Head>
  );
}

