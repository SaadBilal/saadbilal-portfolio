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
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              {/* Place your photo in public/ as 1735576273838.jpeg */}
              <img src={`${import.meta.env.BASE_URL}1735576273838.jpeg`} alt="Saad Bilal" className="w-full h-full object-cover" />
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

      <main className="w-full px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Hi, I’m Saad — building secure, scalable mobile & web platforms</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">Senior Full-Stack Developer with 10+ years building cross-platform mobile apps, backend services, and AI-enabled systems. I work with TypeScript, Python (Django / FastAPI), cloud-native patterns (Docker, Kubernetes, AWS), and modern mobile stacks (Flutter, React Native, native Android/iOS).</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:saadpucit@gmail.com" className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:text-white focus:text-white active:text-white visited:text-white focus-visible:text-white selection:text-white text-sm">Email me</a>
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
          <div className="mt-6 space-y-6">
            {/* YouAttest */}
            <article className="bg-white p-6 rounded-lg shadow">
              <header className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Senior Software Development Engineer — YouAttest</h4>
                  <p className="text-sm text-gray-600">December 2024 — Present • California, United States</p>
                </div>
              </header>
              <div className="mt-3 text-gray-700 text-sm">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Build automation for user access and compliance workflows using Python and cloud services.</li>
                  <li>Integrate identity platforms and automate audits to reduce manual effort and cost.</li>
                  <li>Consult on secure architecture patterns for regulated environments.</li>
                </ul>
              </div>
            </article>

            {/* siParadigm */}
            <article className="bg-white p-6 rounded-lg shadow">
              <header className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Development Lead – Mobile & Backend/Cloud — siParadigm Diagnostic Informatics</h4>
                  <p className="text-sm text-gray-600">Dec 2023 — Nov 2024 • Pakistan</p>
                </div>
              </header>
              <div className="mt-3 text-gray-700 text-sm">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Architected AWS solutions (EC2, S3, RDS, Lambda) and reduced infrastructure costs by ~20%.</li>
                  <li>Implemented CI/CD with CodePipeline and CodeDeploy; improved deployment velocity and reliability.</li>
                  <li>Built backend services with Django & FastAPI and integrated AI/ML models.</li>
                </ul>
              </div>
            </article>

            {/* Enbridge Sustain */}
            <article className="bg-white p-6 rounded-lg shadow">
              <header className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Lead Mobile Developer — Enbridge Sustain</h4>
                  <p className="text-sm text-gray-600">Mar 2024 — Sep 2024 • Canada</p>
                </div>
              </header>
              <div className="mt-3 text-gray-700 text-sm">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Led development of Android & iOS applications; integrated SAP BTP mobile services.</li>
                  <li>Mentored teams, enforced secure DevOps practices, and optimized mobile-to-cloud flows.</li>
                </ul>
              </div>
            </article>

            {/* SwipBox (summary) */}
            <article className="bg-white p-6 rounded-lg shadow">
              <header className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Lead Software Engineer — SwipBox</h4>
                  <p className="text-sm text-gray-600">Jul 2021 — Nov 2023 • Pakistan</p>
                </div>
              </header>
              <div className="mt-3 text-gray-700 text-sm">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Delivered cross-platform mobile solutions (React Native, Flutter) and serverless Node.js APIs.</li>
                  <li>Acted as technical architect and improved delivery processes.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">AI-powered Compliance Automation</h4>
              <p className="mt-2 text-sm text-gray-700">A Python-based automation engine for user access reviews and compliance checks, integrated with identity providers and cloud infra automation.</p>
              <div className="mt-3 text-xs text-gray-500">Tech: Python, AWS Lambda, DynamoDB, CloudFormation</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Mobile Fleet App (Android & iOS)</h4>
              <p className="mt-2 text-sm text-gray-700">End-to-end mobile solution for field operations with offline sync and secure APIs.</p>
              <div className="mt-3 text-xs text-gray-500">Tech: Kotlin, Swift, React Native, GraphQL</div>
            </div>
          </div>
        </section>

        {/* STATS & ARTICLES */}
        <section id="stats-articles" className="mt-12">
          <h3 className="text-2xl font-semibold">Highlights & Articles</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {/* GitHub stats summary (static placeholders; replace with live data if desired) */}
            <div className="rounded-lg shadow p-6 bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-pink-500 text-white">
              <h4 className="font-semibold">GitHub stats</h4>
              <ul className="mt-3 space-y-1 text-sm/6">
                <li className="flex items-center justify-between"><span>Public repos</span><span className="font-semibold">—</span></li>
                <li className="flex items-center justify-between"><span>Stars</span><span className="font-semibold">—</span></li>
                <li className="flex items-center justify-between"><span>Contributions (year)</span><span className="font-semibold">—</span></li>
              </ul>
              <a href="https://github.com/SaadBilal" target="_blank" rel="noreferrer" className="mt-4 inline-block px-3 py-1.5 rounded bg-white/15 hover:bg-white/25 text-white">View profile</a>
            </div>

            {/* LinkedIn Articles */}
            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h4 className="font-semibold">Latest LinkedIn articles</h4>
              <p className="mt-2 text-sm text-gray-700">A selection of recent posts from my LinkedIn. Click to read on LinkedIn.</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  { title: "Article 1 title", href: "https://www.linkedin.com/in/saadbilal/details/recent-activity/" },
                  { title: "Article 2 title", href: "https://www.linkedin.com/in/saadbilal/details/recent-activity/" },
                  { title: "Article 3 title", href: "https://www.linkedin.com/in/saadbilal/details/recent-activity/" },
                  { title: "Article 4 title", href: "https://www.linkedin.com/in/saadbilal/details/recent-activity/" },
                ].map((a, i) => (
                  <li key={i} className="group">
                    <a href={a.href} target="_blank" rel="noreferrer" className="block p-3 rounded border bg-gray-50 hover:bg-white">
                      <span className="font-medium text-gray-900 group-hover:text-indigo-700">{a.title}</span>
                      <div className="mt-1 text-gray-600">linkedin.com • external</div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-gray-600">More on <a href="https://www.linkedin.com/in/saadbilal/details/recent-activity/" target="_blank" rel="noreferrer" className="text-indigo-700 underline">LinkedIn profile</a></div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 mb-24 grid md:grid-cols-2 gap-6">
          {/* ... contact form unchanged ... */}
        </section>
      </main>

      <footer className="bg-white border-t py-6 mt-12">
        <div className="w-full px-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Saad Bilal — Senior Software Development Consultant</div>
          <div className="mt-3 md:mt-0">Built with React + Tailwind • <a href="#contact" className="underline">Contact</a></div>
        </div>
      </footer>
    </div>
  );
}
