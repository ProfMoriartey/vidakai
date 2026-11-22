import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-16 sm:px-6 lg:px-8">
      <div className="border-s border-line ps-5 pt-20 pb-32 sm:ps-8 lg:ps-12">
        <h1 className="font-display-wide text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.04]">This sheet isn’t in the set</h1>
        <p className="mt-4 text-lg text-fg-2">The page you were looking for doesn’t exist or has moved.</p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </div>
  );
}
