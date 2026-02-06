import HubspotEmbed from "./hubspot-embed";

const portalId = "YOUR_PORTAL_ID";
const formId = "YOUR_INQUIRY_FORM_ID";

export default function HubspotInquiryForm() {
  return (
    <HubspotEmbed
      title="General Inquiry (Training / Partnership / Volunteer)"
      description="Select your inquiry type and tell us what you’re trying to achieve."
      portalId={portalId}
      formId={formId}
      region="na1"
    />
  );
}
