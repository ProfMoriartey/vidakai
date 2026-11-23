import Sheet from "./Sheet";
import { templates, type TemplateLayout } from "~/data/site";

// Line drawings of each layout family. Placeholder until real template previews exist.
const drawings: Record<TemplateLayout, React.ReactNode> = {
  menu: (
    <>
      <rect x="12" y="12" width="176" height="44" />
      <path d="M24 72h70M24 84h56M24 96h64M24 108h48M24 120h60" />
      <path d="M150 72h26M156 84h20M152 96h24M158 108h18M154 120h22" />
      <rect x="24" y="134" width="44" height="12" className="fill-redline stroke-none" />
    </>
  ),
  booking: (
    <>
      <rect x="12" y="12" width="84" height="56" />
      <path d="M108 20h70M108 32h54M108 44h62" />
      <g>
        {[0, 1, 2, 3].map((c) =>
          [0, 1, 2].map((r) => <rect key={`${c}-${r}`} x={24 + c * 40} y={84 + r * 20} width="32" height="14" />),
        )}
      </g>
      <rect x="64" y="104" width="32" height="14" className="fill-redline stroke-none" />
    </>
  ),
  catalogue: (
    <>
      <path d="M12 20h60M12 32h40" />
      {[0, 1, 2].map((c) =>
        [0, 1].map((r) => <rect key={`${c}-${r}`} x={12 + c * 60} y={46 + r * 52} width="52" height="44" />),
      )}
      <rect x="132" y="12" width="56" height="14" className="fill-redline stroke-none" />
    </>
  ),
  showcase: (
    <>
      <rect x="12" y="12" width="176" height="70" />
      <path d="M24 98h100M24 110h80" />
      <rect x="12" y="124" width="84" height="28" />
      <rect x="104" y="124" width="84" height="28" />
      <rect x="24" y="64" width="40" height="10" className="fill-redline stroke-none" />
    </>
  ),
};

export default function Templates() {
  return (
    <Sheet
      id="templates"
      number="03"
      title="Templates for your kind of business"
      intro="Each template is a ready-made starting point for one type of business. It’s filled with your content, adjusted to your brand and launched. Previews are on the way."
    >
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {templates.map((t, i) => (
          <li key={t.id} id={`template-${t.id}`} className="sheet-frame scroll-mt-24 bg-ink-raised p-3 sm:p-4">
            <svg viewBox="0 0 200 160" className="w-full text-fg-3" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="0.5" y="0.5" width="199" height="159" className="text-line-strong" stroke="currentColor" />
                {drawings[t.layout]}
              </g>
            </svg>
            <h3 className="mt-4 font-medium">{t.title}</h3>
            <p className="mt-1 text-sm text-fg-2">{t.summary}</p>
            <p className="mt-3 flex items-center justify-between text-[13px] text-fg-3">
              <span>Preview coming soon</span>
              <a href={`#template-${t.id}`} className="tabular-nums hover:text-fg">
                T-{String(i + 1).padStart(2, "0")}
                <span className="sr-only">, link to the {t.title} template</span>
              </a>
            </p>
          </li>
        ))}
      </ul>
    </Sheet>
  );
}
