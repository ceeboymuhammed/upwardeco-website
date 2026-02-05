"use client";

import { useState } from "react";
import AuditPackages from "@/components/audits/audit-packages";
import LeadModal from "@/components/shared/lead-modal";
import StickyRequestAudit from "@/components/sticky-request-audit";

type PackageKey = "lite" | "standard" | "multisite";

export default function AuditsLeadController() {
  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>("standard");

  function openModal(pkg: PackageKey = "standard") {
    setSelectedPackage(pkg);
    setOpen(true);
  }

  return (
    <>
      <AuditPackages onRequestPackage={(pkg) => openModal(pkg)} />

      <StickyRequestAudit onClick={() => openModal("standard")} />

      <LeadModal
        open={open}
        onClose={() => setOpen(false)}
        defaultService="audit"
        defaultPackage={selectedPackage}
      />
    </>
  );
}
