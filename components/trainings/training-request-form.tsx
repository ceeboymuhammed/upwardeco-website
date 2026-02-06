import HubspotForm from "@/components/hubspot-form";

export default function TrainingRequestForm() {
  const region = process.env.NEXT_PUBLIC_HUBSPOT_REGION || "na1";
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "";
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_TRAINING_FORM_ID || "";

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200">
        <div className="text-sm font-semibold text-zinc-900">Mini training request</div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Share a few details and we’ll recommend the right training modules and delivery format.
        </p>

        <div className="mt-6 rounded-2xl bg-brand-bg p-5 ring-1 ring-zinc-200">
          <div className="text-sm font-semibold text-brand-deep">Fields</div>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700">
            <li>• Name</li>
            <li>• Organization</li>
            <li>• Email</li>
            <li>• Training type</li>
            <li>• Team size</li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200">
        {!portalId || !formId ? (
          <div className="text-sm text-zinc-600">
            HubSpot form not configured yet. Add your HubSpot env vars in <code>.env.local</code>.
          </div>
        ) : (
          <HubspotForm region={region} portalId={portalId} formId={formId} />
        )}
      </div>
    </div>
  );
}
