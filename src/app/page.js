"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-900 dark:to-blue-900">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-between"
      >
        <div className="flex gap-4">
          <a
            href="/projects"
            className="transition-colors hover:text-purple-600"
          >
            Projects
          </a>
          <a
            href="https://blog.paulcoding.com"
            className="transition-colors hover:text-purple-600"
          >
            Blog
          </a>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 text-white transition-colors bg-purple-500 rounded-full hover:bg-purple-600"
        >
          Contact
        </a>
      </motion.nav>

      <main className="flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            className="rounded-full shadow-lg"
            src="https://octodex.github.com/images/yogitocat.png"
            alt="Paul's avatar"
            width={200}
            height={200}
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
        >
          Hi, I'm Paul
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-xl text-center"
        >
          A passionate mobile developer with a love for creating beautiful
          applications. I specialize in React Native, Swift and Android
          development using Kotlin and Jetpack Compose.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex gap-4"
        >
          <a
            href="/projects"
            className="px-6 py-3 text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
          >
            View Projects
          </a>
          <a
            href="#skills"
            className="px-6 py-3 text-blue-500 transition-colors border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
          >
            My Skills
          </a>
        </motion.div>
      </main>

      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center gap-6"
      >
        <a
          className="flex items-center gap-2 transition-colors hover:text-purple-600"
          href="https://github.com/longnghia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://nextjs.org/icons/github.svg"
            alt="GitHub icon"
            width={20}
            height={20}
          />
          Github
        </a>
        {/* Add more social links here */}
      </motion.footer>
    </div>
  );
}
