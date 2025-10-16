import Head from "next/head";
import { Mail, GithubIcon, Linkedin } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const projects = [
  {
    title: "FINSYNC",
    description:
      "Simplified invoicing and payment tracking, built to help freelancers and entrepreneurs get paid without the headache.",
    repo: "https://github.com/Adamf124/FINSYNC",
  },
  {
    title: "ECHOCHAT",
    description:
      "A lightweight chat widget using Socket.io with live message syncing.",
    repo: "https://github.com/Adamf124/ECHOCHAT",
  },
  {
    title: "LOCKR",
    description:
      "A CRUD app for saving links, notes, and resources—your personal digital vault.",
    repo: "https://github.com/Adamf124/LOCKR",
  },
];

export default function Home() {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Head>
        <title>Adam Ferguson | Web Developer</title>
        <meta
          name="description"
          content="Portfolio of a modern frontend web developer."
        />
      </Head>
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Main Hero */}
        <section className="py-24 px-6 text-center bg-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Adam Ferguson</h1>
          <h2 className="text-xl mb-6">
            Frontend Developer • React • Next.js • Tailwind
          </h2>
          <p className=" mb-6 max-w-xl mx-auto ">
            I build fast, responsive, and useful interfaces that don’t make
            users want to punch their screens.
          </p>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Contact Me
          </a>
        </section>

        {/* Featured Projects */}
        <section className="py-16 px-6 max-w-4xl mx-auto" id="projects">
          <h3 className="text-3xl font-semibold mb-12 text-center">
            Featured Projects
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
                <p className="mb-4 text-sm text-gray-600">{proj.description}</p>
                <a
                  href={proj.repo}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Icons */}
        <section className="py-16 px-6 bg-gray-100 text-center" id="contact">
          <h3 className="text-2xl font-semibold mb-6">Let’s Connect</h3>
          <p className="mb-4">Have a project or question? Drop a line.</p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:adam@adamferguson.pro"
              className="hover:text-blue-600"
            >
              <Mail className="inline-block w-6 h-6" />
            </a>
            <a
              href="https://github.com/Adamf124"
              target="_blank"
              className="hover:text-blue-600"
            >
              <GithubIcon className="inline-block w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/adamferguson124/"
              target="_blank"
              className="hover:text-blue-600"
            >
              <Linkedin className="inline-block w-6 h-6" />
            </a>
          </div>
        </section>

        <footer className="py-6 text-center text-sm text-gray-500">
          © 2025 Adam Ferguson. Built with Next.js, Tailwind CSS & Monday.
        </footer>
      </main>
    </>
  );
}
