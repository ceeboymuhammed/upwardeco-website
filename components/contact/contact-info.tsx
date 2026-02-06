import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
      <h2 className="text-lg font-semibold">Contact details</h2>

      <div className="mt-6 space-y-4 text-sm">
        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 text-brand-accent" aria-hidden />
          <div>
            <div className="font-semibold text-zinc-900">Email</div>
            <Link
              href="mailto:hello@upwardeco.com"
              className="text-zinc-600 hover:text-zinc-900"
            >
              hello@upwardeco.com
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 text-brand-accent" aria-hidden />
          <div>
            <div className="font-semibold text-zinc-900">Phone</div>
            <Link
              href="tel:+2348039622610"
              className="text-zinc-600 hover:text-zinc-900"
            >
              +234 (803) 962 2610
            </Link>
          </div>
        </div>

        <div className="pt-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-brand-accent" aria-hidden />
            <div className="w-full">
              <div className="font-semibold text-zinc-900">Office locations</div>

              <div className="mt-3 space-y-3 text-zinc-600">
                <div className="rounded-2xl bg-brand-bg p-4 ring-1 ring-zinc-200">
                  Suite 216, Ebenezer place, Area 1 Garki Abuja
                </div>

                <div className="rounded-2xl bg-brand-bg p-4 ring-1 ring-zinc-200">
                  7, Abia Street, Jikwoyi Phase 1 Extension, Abuja
                </div>
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                For visits, please book an appointment first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
