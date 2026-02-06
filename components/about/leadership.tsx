const leaders = [
  {
    name: "Muhammed Sanusi",
    title: "Founder & CEO",
    bio: "Leads strategy, consulting delivery, and partnerships across audits, training, and circular systems.",
    initials: "MS",
  },
  {
    name: "Bethel Clement",
    title: "Co-founder",
    bio: "Supports operations and program development to ensure consistent, high-quality delivery.",
    initials: "BC",
  },
  {
    name: "Fatima Ibrahim",
    title: "Community Manager",
    bio: "Coordinates community programs and engagement that strengthen inclusion and green livelihoods.",
    initials: "FI",
  },
];

export default function Leadership() {
  return (
    <section className="py-14 sm:py-18">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Leadership</h2>
          <p className="mt-3 text-zinc-600">
            A focused team built for accountability, delivery, and standards-aligned work.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {leaders.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonCard({
  name,
  title,
  bio,
  initials,
}: {
  name: string;
  title: string;
  bio: string;
  initials: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-deep text-sm font-bold text-white">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-base font-semibold">{name}</div>
          <div className="mt-1 text-sm font-semibold text-brand-accent">{title}</div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-600">{bio}</p>
    </div>
  );
}
