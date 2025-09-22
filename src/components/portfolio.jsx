/*
  Saad Bilal - Personal Portfolio (React + Tailwind)
  --------------------------------------------------
  Single-file React component (functional) designed to be dropped
  into a React app (Create React App, Vite, or Next.js). Uses Tailwind
  utility classes for styling. Replace sample content where needed.
*/

import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              {/* Place your photo in public/ as 1735576273838.jpeg */}
              <img src="/1735576273838.jpeg" alt="Saad Bilal" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Saad Bilal</h1>
              <p className="text-sm text-gray-600">Sr. Software Development Consultant — Full Stack, Mobile & AI</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contributions" className="hover:underline">Contributions</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Hi, I’m Saad — building secure, scalable mobile & web platforms</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">Senior Full-Stack Developer with 10+ years building cross-platform mobile apps, backend services, and AI-enabled systems. I work with TypeScript, Python (Django / FastAPI), cloud-native patterns (Docker, Kubernetes, AWS), and modern mobile stacks (Flutter, React Native, native Android/iOS).</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:saadpucit@gmail.com" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Email me</a>
              <a href="https://www.linkedin.com/in/saadbilal" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 text-sm border">LinkedIn</a>
              <a href="https://github.com/SaadBilal" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 text-sm border">GitHub</a>
              <a href="https://saadbilal.github.io/whoami" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 text-sm border">Portfolio page</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Location:</strong> Berlin, Germany • <strong>Phone:</strong> +49 157 55837683 / +92 302 6735620
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Quick facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><strong>Top skills:</strong> TypeScript, Apollo GraphQL, Python</li>
              <li><strong>Mobile:</strong> Android (AOSP), iOS, React Native, Flutter</li>
              <li><strong>Cloud & Infra:</strong> AWS (EC2, S3, RDS, Lambda), Docker, Kubernetes</li>
              <li><strong>AI/ML:</strong> model integration, vector DBs (Milvus, Elasticsearch)</li>
              <li><strong>Security:</strong> Pen testing, App security, OWASP</li>
              <li><strong>Languages:</strong> English (Professional), Urdu (Native), Arabic (Elementary)</li>
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16">
          <h3 className="text-2xl font-semibold">About me</h3>
          <div className="mt-4 text-gray-700 leading-relaxed">
            <p>I’m a results-driven senior developer and consultant focusing on mobile, backend, and cloud systems. I have a strong track record of leading teams, architecting solutions, and delivering secure, maintainable products across industries — from enterprise mobile apps to cloud-native AI services.</p>
            <p className="mt-3">I enjoy mentoring engineers, driving DevOps culture, and integrating AI capabilities into production systems. My background spans startups and enterprise projects where I’ve been hands-on in architecture, implementation, and operational excellence.</p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Languages & Frameworks</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>TypeScript, JavaScript (ES6+)</li>
              <li>Python (Django, FastAPI)</li>
              <li>Java / Kotlin, Swift</li>
              <li>React, React Native, Flutter</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Cloud & DevOps</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>AWS (EC2, S3, RDS, Lambda, CloudWatch)</li>
              <li>Docker, Kubernetes, GitHub Actions</li>
              <li>CI/CD, IaC (CloudFormation)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Data & AI</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>ML model integration, vector search (Milvus)</li>
              <li>Elasticsearch, Postgres, RDS</li>
              <li>AI toolchains: embeddings, semantic search, NLU</li>
            </ul>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-12">
          <h3 className="text-2xl font-semibold">Experience</h3>
          {/* ... experience cards remain unchanged ... */}
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          {/* ... project cards remain unchanged ... */}
        </section>

        {/* CONTRIBUTIONS */}
        <section id="contributions" className="mt-12">
          <h3 className="text-2xl font-semibold">Open‑Source Contributions & GitHub Activity</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">GitHub summary</h4>
              <p className="mt-2 text-sm text-gray-700">A snapshot of my public activity and notable repositories. Live widgets update automatically when linked to my GitHub account.</p>
              <div className="mt-4 flex flex-col gap-3">
                <a href="https://github.com/SaadBilal" target="_blank" rel="noreferrer">
                  <img src="https://github-readme-stats.vercel.app/api?username=SaadBilal&show_icons=true&theme=radical" alt="GitHub stats" />
                </a>
                <a href="https://github.com/SaadBilal" target="_blank" rel="noreferrer">
                  <img src="https://github-profile-trophy.vercel.app/?username=SaadBilal" alt="GitHub trophies" />
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Recent & notable contributions</h4>
              <ul className="mt-3 text-sm text-gray-700 list-disc ml-5 space-y-2">
                <li>Maintainer / contributor to internal tools and public repos.</li>
                <li>Published utilities for mobile app testing and CI automation.</li>
                <li>Active in code reviews, open-source issue triage, and mentoring junior contributors.</li>
              </ul>
              <div className="mt-4 text-sm text-gray-600">Quick links: <a href="https://github.com/SaadBilal" target="_blank" rel="noreferrer" className="text-indigo-600">GitHub</a> • <a href="https://github.com/SaadBilal?tab=repositories" target="_blank" rel="noreferrer" className="text-indigo-600">Repos</a></div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 mb-24 grid md:grid-cols-2 gap-6">
          {/* ... contact form unchanged ... */}
        </section>
      </main>

      <footer className="bg-white border-t py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Saad Bilal — Senior Software Development Consultant</div>
          <div className="mt-3 md:mt-0">Built with React + Tailwind • <a href="#contact" className="underline">Contact</a></div>
        </div>
      </footer>
    </div>
  );
}
