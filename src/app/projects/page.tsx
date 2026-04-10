import Link from "next/link";

export default function Projects() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#FAF8F5]">
      <div className="text-center">
        <h1 className="text-4xl font-light text-[#7BA7BC]" style={{ fontFamily: "var(--font-serif)" }}>Side Projects</h1>
        <p className="mt-4 text-[#8B7355]">Coming soon</p>
        <Link href="/" className="mt-6 inline-block text-sm text-[#8B7355] underline underline-offset-4 hover:text-[#7BA7BC]">Back to home</Link>
      </div>
    </div>
  );
}
