"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

import { selfData } from "@/constant";
import { ContactFormCard, ContactSocials } from "@/components/Cards";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="section-shell"
    >
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-3xl"
        >
          <span className="eyebrow">Contact</span>
          <h2 className="section-title mt-5">Let&apos;s talk about AI, applied ML, or product-focused engineering work.</h2>
          <p className="section-lead mt-5">
            If you&apos;re hiring, collaborating, or just want to discuss a project, this is the easiest place to reach me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <ContactFormCard />

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="surface p-6 sm:p-7"
            >
              <p className="metric-label">Direct contact</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Reach out directly or use the contact form.
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                I&apos;m especially interested in AI engineering, machine learning systems, research-driven prototypes,
                and opportunities where product thinking matters as much as modeling.
              </p>
              <div className="section-divider" />
              <ContactList />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="surface p-6 sm:p-7"
            >
              <p className="metric-label">Profiles</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Find me on the platforms I actually use.
              </h3>
              <ContactSocials />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  label,
  value,
  href,
}) => {
  const content = (
    <motion.div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:border-primary/30 hover:bg-white/[0.05]">
      <div className="flex items-center space-x-4">
        <div className="rounded-2xl bg-primary/10 p-3">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
          <p className="mt-1 font-medium text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

const ContactList = () => {
  return (
    <div className="space-y-4">
      <ContactItem
        icon={IoMailOutline}
        label="Email"
        value={selfData.email}
        href={`mailto:${selfData.email}`}
      />
      <ContactItem
        icon={IoLocationOutline}
        label="Location"
        value={`${selfData.current_location.city}, ${selfData.current_location.state}, ${selfData.current_location.country}`}
      />
    </div>
  );
};
