import Sheet from "./Sheet";
import TemplateGrid from "./Templates";
import { Process } from "./Process";

/** How a project runs, then the templates to start from. */
export default function GettingStarted() {
  return (
    <Sheet
      id="start"
      title="Getting started"
      intro="See how a project runs, then pick a template for your kind of business or start from a blank sheet."
    >
      <div className="flex flex-col gap-20">
        <Process />
        <TemplateGrid />
      </div>
    </Sheet>
  );
}
