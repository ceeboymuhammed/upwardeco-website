import RecoveryHero from "@/components/recovery/recovery-hero";
import RecoveryProblem from "@/components/recovery/recovery-problem";
import RecoveryWhatWeDo from "@/components/recovery/recovery-what-we-do";
import RecoveryHubModel from "@/components/recovery/recovery-hub-model";
import RecoveryWhoFor from "@/components/recovery/recovery-who-for";
import RecoveryBenefits from "@/components/recovery/recovery-benefits";
import RecoveryLinkToAudits from "@/components/recovery/recovery-link-to-audits";
import RecoveryCta from "@/components/recovery/recovery-cta";


export default function MaterialRecoveryPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <RecoveryHero />
        <RecoveryProblem />
        <RecoveryWhatWeDo />
        <RecoveryHubModel />
        <RecoveryWhoFor />
        <RecoveryBenefits />
        <RecoveryLinkToAudits />
        <RecoveryCta />
      </main>
    </div>
  );
}
