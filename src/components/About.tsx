import Sheet from "./Sheet";

export default function About() {
  return (
    <Sheet id="about" number="06" title="About the studio">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="space-y-5 text-lg text-fg-2 md:col-span-8">
          <p>
            Vidakai Studio designs and builds websites and web apps for businesses and organisations: restaurants,
            cafes, clinics, schools, and fabric and automotive companies.
          </p>
          <p>
            The work above includes live sites for clients in Turkey and Finland, a catalogue used by buyers in 53+
            countries, and demos for clinics.
          </p>
          <p>
            Based in Bursa, Turkey, the studio works with clients locally and abroad. Projects are handled in Arabic,
            English or Turkish, and Arabic right-to-left sites are built properly from the start. Every site is
            designed for phones first, launched on your own domain, and looked after once it’s live.
          </p>
        </div>
      </div>
    </Sheet>
  );
}
