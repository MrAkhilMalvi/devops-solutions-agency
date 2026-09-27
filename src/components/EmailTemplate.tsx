import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  website?: string;
  message?: string;
  planName: string;
  billingCycle: string;
  price?: number | null;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  phone,
  website,
  message,
  planName,
  billingCycle,
  price,
}) => (
  <div style={{ fontFamily: "Helvetica, Arial, sans-serif", padding: "20px", backgroundColor: "#faf9f6", color: "#0f172a" }}>
    <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#0f172a", padding: "24px", textAlign: "center" }}>
        <h1 style={{ color: "#ffffff", margin: 0, fontSize: "20px", fontWeight: "bold" }}>
          AKHIL<span style={{ color: "#ff5722" }}>OPTIX</span>
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "12px", margin: "6px 0 0 0" }}>
          New Infrastructure Lead Requirement
        </p>
      </div>

      {/* Body */}
      <div style={{ padding: "32px" }}>
        <div style={{ backgroundColor: "#fff7ed", borderLeft: "4px solid #ff5722", padding: "16px", borderRadius: "4px", marginBottom: "24px" }}>
          <p style={{ margin: 0, fontSize: "12px", color: "#c2410c", fontWeight: "bold", textTransform: "uppercase" }}>
            Selected Plan
          </p>
          <h2 style={{ margin: "4px 0 0 0", fontSize: "22px", color: "#0f172a" }}>
            {planName} Plan ({billingCycle})
          </h2>
          {price && (
            <p style={{ margin: "4px 0 0 0", fontSize: "14px", fontWeight: "bold", color: "#ff5722" }}>
              ₹{price.toLocaleString("en-IN")} / {billingCycle === "monthly" ? "month" : "year"}
            </p>
          )}
        </div>

        <h3 style={{ fontSize: "14px", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
          Client Contact Details
        </h3>
        
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", marginBottom: "24px" }}>
          <tbody>
            <tr>
              <td style={{ padding: "8px 0", color: "#64748b", width: "120px" }}>Name:</td>
              <td style={{ padding: "8px 0", fontWeight: "bold", color: "#0f172a" }}>{name}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#64748b" }}>Email:</td>
              <td style={{ padding: "8px 0", fontWeight: "bold", color: "#0f172a" }}>
                <a href={`mailto:${email}`} style={{ color: "#ff5722", textDecoration: "none" }}>{email}</a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#64748b" }}>Phone/WA:</td>
              <td style={{ padding: "8px 0", fontWeight: "bold", color: "#0f172a" }}>
                <a href={`tel:${phone}`} style={{ color: "#0f172a", textDecoration: "none" }}>{phone}</a>
              </td>
            </tr>
            {website && (
              <tr>
                <td style={{ padding: "8px 0", color: "#64748b" }}>Website/Repo:</td>
                <td style={{ padding: "8px 0", fontWeight: "bold", color: "#0f172a" }}>{website}</td>
              </tr>
            )}
          </tbody>
        </table>

        {message && (
          <div>
            <h3 style={{ fontSize: "14px", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
              Project Requirements
            </h3>
            <p style={{ backgroundColor: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #f1f5f9", margin: 0, fontSize: "14px", lineHeight: "1.6", color: "#334155" }}>
              {message}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#f8fafc", padding: "16px", textAlign: "center", borderTop: "1px solid #e2e8f0", fontSize: "11px", color: "#94a3b8" }}>
        Automated lead capture system by Akhiloptix // Akhil Enterprise
      </div>
    </div>
  </div>
);