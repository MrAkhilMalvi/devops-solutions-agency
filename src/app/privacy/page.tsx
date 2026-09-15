import { LegalPageLayout } from "@/components/ui/legal-layout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      tag="PRIVACY // DATA POLICY"
      title="Privacy Policy"
      lastUpdated="OCTOBER 2025"
    >
      <section className="space-y-6 text-slate-700 leading-relaxed">
        <p className="text-base text-slate-800 font-medium">
          At CloudScale Ops (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), we operate managed cloud deployments, continuous monitoring, and infrastructure provisioning. This Privacy Policy details how we collect, handle, and isolate your technical data when configuring raw cloud infrastructure (AWS, Hetzner, GCP, DigitalOcean).
        </p>

        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
            1. Infrastructure Access &amp; Cloud Credentials
          </h2>
          <p>
            When performing DevOps setups, we require least-privilege IAM credentials, SSH public keys, or cloud provider API tokens. 
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 font-mono text-xs">
            <li>Credentials are stored exclusively in AES-256 encrypted hardware secret managers.</li>
            <li>We do NOT store or inspect your application&apos;s customer databases or proprietary business payloads.</li>
            <li>Upon offboarding or retainer completion, all temporary access credentials are decommissioned.</li>
          </ul>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
            2. Server Telemetry &amp; Log Processing
          </h2>
          <p>
            To provide 24/7 uptime monitoring and auto-scaling alerting, we aggregate non-identifiable system telemetry:
          </p>
          <p className="text-slate-600 text-sm">
            CPU usage spikes, RAM allocation percentages, network ingress/egress bytes, error rate HTTP counts (e.g. 5xx responses), and container memory limits.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
            3. Data Isolation &amp; Zero Vendor Lock-in
          </h2>
          <p>
            Unlike proprietary PaaS providers, all infrastructure provisioned by CloudScale Ops lives in <strong>your own cloud accounts</strong>. You retain 100% legal ownership, direct root access, and operational authority over all provisioned VPCs, nodes, and databases.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
            4. Contact Our Data Protection Officer
          </h2>
          <p className="text-sm">
            For SOC-2 audit logs, DPA (Data Processing Agreements), or GDPR inquiries, contact:{" "}
            <a href="mailto:security@cloudscaleops.com" className="font-mono text-[#ff5722] underline">
              security@cloudscaleops.com
            </a>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}