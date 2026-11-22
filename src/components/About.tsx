import Sheet from "./Sheet";
import { site } from "~/data/site";

export default function About() {
  return (
    <Sheet id="about" number="06" title="Who you’ll work with">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="space-y-5 text-lg text-fg-2 md:col-span-8">
          <p>
            Vidakai Studio is me, {site.owner}. I design websites and write the code for them myself, so the
            person you brief is the person who builds your site and answers your messages.
          </p>
          <p>
            I work with local businesses: restaurants, cafes, clinics, schools, fabric and automotive companies.
            The work above is mine, and every project there is live.
          </p>
          {/* TODO: owner to replace or extend with a few honest lines about themselves */}
          <p>TODO: a sentence or two about you, where you are based, and how you like to work.</p>
        </div>
      </div>
    </Sheet>
  );
}
