import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaAward } from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "Habit Tracker",
      desc: "A productivity app to manage daily habits with monthly goals, streak tracking, and modern UI. Built using Angular standalone components, NgRx and PrimeNG.",
      link: "https://github.com/crispa17/habit-tracker-angular",
    },
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio built with React and Tailwind CSS to showcase personal projects and skills.",
    },
    {
      title: "AI Proxy Server",
      desc: "A Node.js proxy microservice deployed on Vercel to securely relay requests to Mistral AI APIs, handling CORS and preflight requests for frontend applications.",
      link: "https://github.com/crispa17/proxy-server",
    },
    {
      title: "Shopping Assistant AI",
      desc: "An Angular app that communicates with a custom proxy to Mistral AI to generate AI-powered shopping lists based on natural language prompts. Includes loading UX and robust error handling.",
      link: "https://shopping-assistant-three.vercel.app/shopping",
    },
  ];

  const certifications = [
    {
      name: "Advanced Angular Development",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/GFTZ00KAZZO5?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    },
    {
      name: "Angular for Front End Engineers",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/XIX9SBVZFQQQ?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    },
    {
      name: "Angular 17",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/SDQCR3K5L4G2?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n",
    },
    {
      name: "Angular Testing: Unit Testing Angular and E2E Testing",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-2ed8bd35-5619-4fd4-aedb-b68c9de6115d/",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/crispa17",
      icon: <FaGithub size={30} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/cristian-parrino-2573aa220/",
      icon: <FaLinkedin size={30} />,
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } min-h-screen p-6 font-sans transition-colors duration-500 relative`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 z-50
          ${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      <header className="text-center mb-12 pt-16"> {/* Aggiunto padding-top per il bottone fisso */}
        <h1 className="text-4xl font-bold mb-2">Cristian Parrino</h1>

        <img
          src={darkMode ? "/cartoon-light.png" : "/cartoon-dark.png"}
          alt="Cristian cartoon avatar"
          className="mx-auto h-60 object-contain transition-all duration-500"
        />

        <p
          className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          <Typewriter
            words={[
              "Frontend Developer",
              "Angular Specialist",
              "UI Enthusiast",
            ]}
            loop={false}
            cursor
          />
        </p>
      </header>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
        <p
          className={`text-lg max-w-3xl mx-auto text-center ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I'm a passionate Frontend Developer with over 3 years of experience
          crafting modern, performant web interfaces using technologies like
          React, Angular, and TypeScript. I love creating engaging user
          experiences and writing clean, maintainable code.
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Angular",
            "Tailwind CSS",
            "Git",
            "Java",
            "Figma",
            "NgRx",
            "PrimeNG",
          ].map((skill) => (
            <motion.li
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 text-black dark:text-white p-4 rounded-xl shadow transition text-center"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow transition"
            >
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400 hover:underline block"
              >
                {project.title}
              </a>
              <p className="text-black dark:text-gray-300">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="certifications"
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <FaAward size={40} className="text-blue-500 dark:text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {cert.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Issued by: {cert.issuer}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out text-sm"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
        <form
          className="max-w-xl mx-auto grid gap-4"
          action="https://formspree.io/f/mpwrdevy"
          method="POST"
        >
          <input
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      <motion.footer
        className="text-center py-8 border-t border-gray-300 dark:border-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode ? "text-gray-300 hover:text-white" : "text-black hover:text-gray-800"
              } transition-colors duration-300`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Contact: parrinocristian17@gmail.com
        </p>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          &copy; {new Date().getFullYear()} Cristian Parrino. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}