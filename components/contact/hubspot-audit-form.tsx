import HubspotEmbed from "./hubspot-embed";

export default function HubspotAuditForm() {
  return (
    <HubspotEmbed
      title="Request an Environmental Audit"
      description="Share a few details about your site(s) and priorities. We’ll respond with next steps."
      portalId="147731304"
      formId="de95b72a-63a4-45b2-85de-f0921c4d47a5"
      region="eu1"
    />
  );
}
