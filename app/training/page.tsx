import HeroSimple from "@/components/trainings/training-hero";
import Section from "@/components/shared/section";
import CtaStrip from "@/components/shared/cta-strip";
import WhyTrainingMatters from "@/components/trainings/why-training-matters";
import WhoItsFor from "@/components/trainings/who-its-for";
import TrainingModules from "@/components/trainings/training-modules";
import TrainingFormats from "@/components/trainings/training-formats";
import TrainingRequestForm from "@/components/trainings/training-request-form";
import TrainingOutcomes from "@/components/trainings/training-outcomes";
import LinkToAudits from "@/components/trainings/link-to-audits";
export default function TrainingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
 

      <main className="flex-1">
        <HeroSimple
          title="Practical Sustainability Training That Turns Awareness into Action"
          subtitle="Role-based, implementation-first training for teams, leaders, and individuals—built around real operational decisions, compliance expectations, and measurable outcomes."
          primary={{ label: "Request Training", href: "/contact" }}
          secondary={{ label: "View Audit Services", href: "/environmental-audits" }}
        />

        <Section
          title="Why training matters"
          subtitle="Sustainability programs fail when people don’t know what to do differently. Training turns policy into daily actions, aligned to standards and measurable performance."
        >
          <WhyTrainingMatters />
        </Section>

        <Section
          variant="muted"
          title="Who it’s for"
          subtitle="Built for businesses, institutions, partners, and individuals who want credible sustainability performance."
        >
          <WhoItsFor />
        </Section>

        <Section
          title="Training modules"
          subtitle="Choose a module or combine them into a tailored program for your team."
        >
          <TrainingModules />
        </Section>

        <Section
          variant="muted"
          title="Formats"
          subtitle="Flexible delivery that works for busy teams—online, onsite, or blended."
        >
          <TrainingFormats />
        </Section>

        <Section
          title="Outcomes"
          subtitle="What your organization walks away with—practical skills, tools, and clearer performance."
        >
          <TrainingOutcomes />
        </Section>

        <Section
          variant="muted"
          title="Link to audits"
          subtitle="Training works best when it’s grounded in real data. Start with an audit, then build capacity around the findings."
        >
          <LinkToAudits />
        </Section>

        <CtaStrip
          title="Ready to equip your team to implement sustainability—properly?"
          subtitle="Get a training plan that fits your sector, roles, and reporting expectations."
          primary={{ label: "Request Training", href: "/contact" }}
          secondary={{ label: "Partner With Us", href: "/partnerships" }}
          tone="dark"
        />        
      </main>
<Section
  title="Request training"
  subtitle="Tell us what you need—get a tailored training plan for your team."
>
  <TrainingRequestForm />
</Section>

    
    </div>
  );
}
