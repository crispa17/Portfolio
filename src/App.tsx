import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
      title: "Dashboard App",
      desc: "An interactive admin dashboard with charts and tables, developed using Angular and TypeScript.",
    },
    {
      title: "E-commerce UI",
      desc: "A modern e-commerce front-end prototype using React, styled-components, and responsive design.",
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen p-6 font-sans transition-colors duration-500`}
    >
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Cristian Parrino</h1>

        <img
          src={darkMode ? "/cartoon-light.png" : "/cartoon-dark.png"}
          alt="Cristian cartoon avatar"
          className="mx-auto w-45 h-45 object-contain transition-all duration-500"
        />

        <p className="text-xl text-gray-600 dark:text-gray-300">
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

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300">
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
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
          ].map((skill) => (
            <motion.li
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl shadow transition"
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
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition"
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
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          <li>Advanced Angular Development - Coursera</li>
          <li>Angular for Front End Engineers - Coursera</li>
        </ul>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
            rows={5}
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl transition"
          >
            Send
          </button>
        </form>
      </motion.section>

      <motion.footer
        className="text-center text-black dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>Contact: parrinocristian17@gmail.com</p>
        <p>GitHub: github.com/crispa17</p>
        <p>LinkedIn: linkedin.com/in/cristian-parrino-2573a</p>
      </motion.footer>
    </div>
  );
}
