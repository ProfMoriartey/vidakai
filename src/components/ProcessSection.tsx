import Sheet from "./Sheet";
import TemplateGrid from "./Templates";
import { Process } from "./Process";

/** How a project runs, then the templates it can start from. */
export default function ProcessSection() {
  return (
    <Sheet
      id="process"
      title="Process"
      intro="How a project runs from brief to launch, and the templates it can start from."
    >
      <div className="flex flex-col gap-20">
        <Process />
        <TemplateGrid />
      </div>
    </Sheet>
  );
}
