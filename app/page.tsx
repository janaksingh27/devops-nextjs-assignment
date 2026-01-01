import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-6 text-center">
        
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          priority
        />

        <h1 className="text-3xl font-bold">
          🚀 DevOps Internship Project
        </h1>

        <p className="text-lg text-zinc-600">
          Next.js App running on Kubernetes
        </p>

        <p className="text-md text-zinc-500">
          Updated by <strong>Janak Singh</strong> ✅
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href="https://nextjs.org"
            target="_blank"
            className="rounded bg-black px-6 py-2 text-white"
          >
            Next.js Docs
          </a>

          <a
            href="https://kubernetes.io"
            target="_blank"
            className="rounded border px-6 py-2"
          >
            Kubernetes
          </a>
        </div>
      </main>
    </div>
  );
}
