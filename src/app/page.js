import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row items-center flex-1 gap-4">
        <div>
          <a href="/projects">Projects</a>
        </div>
        <div>
          <a href="https://blog.paulcoding.com">Blog</a>
        </div>
      </div>
      <main className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
        <Image
          className="dark:invert"
          src="https://octodex.github.com/images/yogitocat.png"
          alt="Next.js logo"
          width={180}
          height={180}
          priority
        />
        <div className="w-full text-center"> Hi there! I'm Paul;</div>
      </main>
      <footer className="flex flex-wrap items-center justify-center row-start-3 gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/longnghia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/github.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Github
        </a>
      </footer>
    </div>
  );
}
