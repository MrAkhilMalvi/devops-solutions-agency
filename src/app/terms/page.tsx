import { LegalPageLayout } from "@/components/ui/legal-layout";

export default function TermsPage() {
  return (
    <LegalPageLayout
      tag="TERMS // SERVICE SLA"
      title="Terms & Conditions"
      lastUpdated="OCTOBER 2025"
    >
      <section className="space-y-6 text-slate-700 leading-relaxed">
        <p className="text-base text-slate-800 font-medium">
          These Terms of Service govern your engagement with AkhilOptix for DevOps automation, Terraform deployments, Kubernetes orchestration, and ongoing infrastructure maintenance.
        </p>

        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
            1. Scope of Managed DevOps
          </h2>
          <p className="text-sm">
            AkhilOptix delivers infrastructure-as-code (IaC), zero-downtime blue/green migration pipelines, and server-hardening protocols. The client maintains financial responsibility for underlying cloud provider charges (e.g. Amazon Web Services, Hetzner Online GmbH, Google Cloud).
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
            2. Service Level Agreement (SLA) &amp; Incident Response
          </h2>
          <p className="text-sm">
            For clients on active 24/7 Managed Retainers:
          </p>
          <div className="border border-slate-200 bg-slate-50/70 p-4 rounded-sm font-mono text-xs space-y-1">
            <div>• P1 Incidents (Complete cluster outage): Response &lt; 15 minutes.</div>
            <div>• P2 Incidents (Degraded capacity / High latency): Response &lt; 45 minutes.</div>
            <div>• P3 Incidents (General maintenance / Configuration changes): Response &lt; 4 hours.</div>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
            3. Code Ownership &amp; Intellectual Property
          </h2>
          <p className="text-sm">
            All Terraform scripts, Dockerfiles, and Helm charts written for your infrastructure are deemed Work Made for Hire. Upon invoice settlement, <strong>100% intellectual property ownership transfers to the client</strong> with zero proprietary license restrictions.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
            4. Mutual Non-Disclosure
          </h2>
          <p className="text-sm">
            We treat all customer source code, architecture diagrams, and financial statements as strictly confidential under standard mutual NDA guidelines.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}