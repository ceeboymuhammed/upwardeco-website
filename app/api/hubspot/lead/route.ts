import { NextResponse } from "next/server";

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  industry?: string;
  location?: string;
  numberOfSites?: string;
  siteSize?: string;
  wasteVolume?: string;
  service: "audit" | "training" | "both";
  package: "lite" | "standard" | "multisite";
  notes?: string;
};

export async function POST(req: Request) {
  const body = (await req.json()) as Payload;

  // Basic validation
  if (!body.email || !body.firstName || !body.lastName || !body.company) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;

  if (!portalId || !formGuid) {
    return NextResponse.json(
      { ok: false, error: "HubSpot env vars not configured" },
      { status: 500 }
    );
  }

  // Map your UI fields to HubSpot form field "name" values.
  // IMPORTANT: the "name" must match the internal field names in your HubSpot form.
  const hubspotPayload = {
    fields: [
      { name: "firstname", value: body.firstName },
      { name: "lastname", value: body.lastName },
      { name: "email", value: body.email },
      { name: "phone", value: body.phone ?? "" },
      { name: "company", value: body.company },

      // Custom fields (create these in HubSpot Form + properties)
      { name: "industry", value: body.industry ?? "" },
      { name: "location", value: body.location ?? "" },
      { name: "number_of_sites", value: body.numberOfSites ?? "" },
      { name: "site_size", value: body.siteSize ?? "" },
      { name: "waste_volume", value: body.wasteVolume ?? "" },
      { name: "service_interest", value: body.service },
      { name: "audit_package", value: body.package },
      { name: "notes", value: body.notes ?? "" },
    ],
    context: {
      pageUri: req.headers.get("referer") ?? "",
      pageName: "Environmental Audits",
    },
  };

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hubspotPayload),
  });

  if (!resp.ok) {
    const text = await resp.text();
    return NextResponse.json({ ok: false, error: text }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
