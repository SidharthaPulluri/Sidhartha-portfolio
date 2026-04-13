import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Row,
  Column,
  Link,
} from "@react-email/components";

import { selfData } from "@/constant";

interface EmailTemplateProps {
  userName: string;
  contactReason: string;
  userMessage: string;
}

export function EmailTemplate({
  userName,
  contactReason,
  userMessage,
}: EmailTemplateProps) {
  const socials = [
    {
      name: "GitHub",
      url: `https://github.com/${selfData.socials_username.github}`,
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
    {
      name: "LinkedIn",
      url: `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
    },
    {
      name: "LeetCode",
      url: `https://leetcode.com/${selfData.socials_username.leetcode}`,
      icon: "https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png",
    },
    {
      name: "Instagram",
      url: `https://instagram.com/${selfData.socials_username.instagram}`,
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
    {
      name: "X",
      url: `https://x.com/${selfData.socials_username.twitter}`,
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968830.png",
    },
  ];

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Row>
              <Column style={{ width: "58px" }}>
                <Text style={brandBadge}>SP</Text>
              </Column>
              <Column>
                <Text style={brandText}>{selfData.name}</Text>
                <Text style={brandSubtext}>Portfolio contact acknowledgement</Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Text style={heading}>Hi {userName},</Text>

            <Text style={text}>
              Thank you for reaching out via my portfolio site. I have received
              your message and will respond as soon as possible.
            </Text>

            <Text style={label}>
              Reason for contact: <strong>{contactReason}</strong>
            </Text>

            <Text style={label}>Message:</Text>
            <pre style={codeBlock}>{userMessage}</pre>

            <Section style={socialSection}>
              <table style={socialTable}>
                <tbody>
                  <tr>
                    {socials.map((social) => (
                      <td key={social.name} style={socialIconCol}>
                        <Link href={social.url}>
                          <Img
                            src={social.icon}
                            alt={social.name}
                            width="28"
                            height="28"
                            style={socialIcon}
                          />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </Section>

            <Text style={footerText}>
              You&apos;re receiving this email because a message was submitted
              through my portfolio contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main: React.CSSProperties = {
  background:
    "radial-gradient(circle at top, rgba(96, 165, 250, 0.18), transparent 38%), linear-gradient(180deg, #08111d 0%, #0f172a 52%, #111827 100%)",
  padding: "40px 20px",
  fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: "#e5edf8",
  lineHeight: "1.5",
};

const container: React.CSSProperties = {
  backgroundColor: "transparent",
  maxWidth: "600px",
  margin: "0 auto",
};

const header: React.CSSProperties = {
  marginBottom: "30px",
  alignItems: "center",
};

const brandBadge: React.CSSProperties = {
  width: "42px",
  height: "42px",
  lineHeight: "42px",
  textAlign: "center",
  borderRadius: "999px",
  margin: "0",
  fontSize: "16px",
  fontWeight: "700",
  letterSpacing: "0.08em",
  color: "#dbeafe",
  backgroundColor: "rgba(37, 99, 235, 0.22)",
  border: "1px solid rgba(148, 163, 184, 0.35)",
};

const brandText: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "bold",
  marginLeft: "10px",
  marginTop: "3px",
  marginBottom: "2px",
};

const brandSubtext: React.CSSProperties = {
  fontSize: "12px",
  marginLeft: "10px",
  marginTop: "0",
  color: "#9fb2c9",
};

const heading: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const text: React.CSSProperties = {
  fontSize: "16px",
  marginBottom: "16px",
};

const label: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "20px",
};

const codeBlock: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.1)",
  padding: "16px",
  borderRadius: "8px",
  fontFamily: "monospace",
  fontSize: "14px",
  whiteSpace: "pre-wrap",
  lineHeight: "1.4",
  color: "#fff",
  marginTop: "8px",
};

const socialSection: React.CSSProperties = {
  marginTop: "30px",
  padding: "20px",
  textAlign: "center",
  width: "100%",
};

const socialTable: React.CSSProperties = {
  margin: "0 auto",
  borderSpacing: "12px",
  borderCollapse: "separate",
};

const socialIconCol: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.08)",
  padding: "8px",
  borderRadius: "8px",
  textAlign: "center",
};

const socialIcon: React.CSSProperties = {
  borderRadius: "4px",
};

const footerText: React.CSSProperties = {
  fontSize: "12px",
  marginTop: "30px",
  color: "#ccc",
};
