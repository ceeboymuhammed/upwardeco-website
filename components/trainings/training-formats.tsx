const formats = [
  {
    title: "Onsite Workshops",
    desc: "Facilitated sessions for teams with practical exercises and action planning.",
  },
  {
    title: "Virtual Training",
    desc: "Live sessions for distributed teams with recordings and resources.",
  },
  {
    title: "Blended Programs",
    desc: "Mix of onsite + virtual learning to fit operational schedules.",
  },
  {
    title: "Train-the-Trainer",
    desc: "Build internal champions to sustain implementation long-term.",
  },
];

export default function TrainingFormats() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {formats.map((f) => (
        <div key={f.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
          <h3 className="text-base font-semibold">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
