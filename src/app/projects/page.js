"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Go Money",
    description: "IOS Expense Tracker App",
    image:
      "https://github.com/longnghia/Go-Money/blob/dev/GoMoney/Resources/Assets.xcassets/logo.imageset/logo.png?raw=true",
    github: "https://github.com/longnghia/Go-Money",
    demo: "",
  },
  {
    title: "Read Later",
    description: "Firefox tabs saver extension",
    image:
      "https://raw.githubusercontent.com/longnghia/read-later/main/public/icon-128.png",
    github: "https://github.com/longnghia/read-later",
    demo: "https://addons.mozilla.org/addon/read-it-later/",
  },
  // Add more projects as needed
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
  >
    <Image
      src={project.image}
      alt={project.title}
      width={300}
      height={200}
      className="object-contain w-full h-48"
    />
    <div className="p-4">
      <h3 className="mb-2 text-xl font-semibold dark:text-white">
        {project.title}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        {project.description}
      </p>
      <div className="flex justify-between">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
        >
          GitHub
        </Link>
        {project.demo ? (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View
          </Link>
        ) : null}
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <div className="min-h-screen p-8 text-gray-800 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-900 dark:to-blue-900 dark:text-gray-200">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <Link
          href="/"
          className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
