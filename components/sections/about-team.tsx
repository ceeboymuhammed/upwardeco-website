type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

const team: TeamMember[] = [
  {
    name: "Team Member Name",
    role: "Role / Specialty",
    bio: "Short description of expertise and what they focus on.",
  },
  {
    name: "Team Member Name",
    role: "Role / Specialty",
    bio: "Short description of expertise and what they focus on.",
  },
  {
    name: "Team Member Name",
    role: "Role / Specialty",
    bio: "Short description of expertise and what they focus on.",
  },
];

export default function AboutTeam() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-14 sm:py-18">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Meet the team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-700">
            People-first sustainability: a team combining strategy, training, and
            implementation support.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100" />
              <div className="mt-5">
                <h3 className="text-base font-semibold text-zinc-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-600">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
