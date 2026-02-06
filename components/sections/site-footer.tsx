import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container-px py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-sm font-semibold">UpwardEco Ltd</div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600">
              Environmental Sustainability & Circular Economy Consulting for businesses,
              institutions, and development partners.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Pages</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li><Link className="hover:text-zinc-900" href="/environmental-audits">Environmental Audits</Link></li>
              <li><Link className="hover:text-zinc-900" href="/training">Sustainability Training</Link></li>
              <li><Link className="hover:text-zinc-900" href="/material-recovery">Material Recovery & Circular Systems</Link></li>
              <li><Link className="hover:text-zinc-900" href="/partnerships">Partnerships</Link></li>
              <li><Link className="hover:text-zinc-900" href="/volunteer">Volunteer</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-zinc-600">
              <p>hello@upwardeco.com</p>
              <p>+234 (803) 962 2610</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} UpwardEco Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
