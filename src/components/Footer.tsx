import Link from "next/link";
import { site } from "~/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-8 text-sm text-fg-3 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link href="/work" className="hover:text-fg">
              All projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-fg">
              Contact
            </Link>
          </li>
          {site.social.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="hover:text-fg" rel="me noopener" target="_blank">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
