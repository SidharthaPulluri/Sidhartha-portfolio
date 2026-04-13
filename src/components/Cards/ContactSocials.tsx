import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

import { SiLeetcode } from "react-icons/si";
import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

import { selfData } from "@/constant";

export const ContactSocials = () => {
  const socialLinks = [
    {
      label: "GitHub",
      Icon: FaGithub,
      link: `https://github.com/${selfData.socials_username.github}`,
      enabled: Boolean(selfData.socials_username.github),
    },
    {
      label: "LinkedIn",
      Icon: FaLinkedinIn,
      link: `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
      enabled: Boolean(selfData.socials_username.linkedin),
    },
    {
      label: "Telegram",
      Icon: PiTelegramLogo,
      link: `https://t.me/${selfData.socials_username.telegram}`,
      enabled: Boolean(selfData.socials_username.telegram),
    },
    {
      label: "Twitter",
      Icon: FaTwitter,
      link: `https://twitter.com/${selfData.socials_username.twitter}`,
      enabled: Boolean(selfData.socials_username.twitter),
    },
    {
      label: "LeetCode",
      Icon: SiLeetcode,
      link: `https://leetcode.com/${selfData.socials_username.leetcode}`,
      enabled: Boolean(selfData.socials_username.leetcode),
    },
  ].filter((item) => item.enabled);

  return (
    <ul className="mt-6 flex flex-wrap gap-3">
      {socialLinks.map((social, index) => (
        <ContactSocialItem
          key={social.label}
          Icon={social.Icon}
          link={social.link}
          label={social.label}
          index={index}
        />
      ))}
    </ul>
  );
};

const ContactSocialItem = ({
  Icon,
  link,
  label,
  index,
}: {
  Icon: IconType;
  link: string;
  label: string;
  index: number;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 12 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
      }}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground transition hover:border-primary/30 hover:bg-white/[0.08]"
      >
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </Link>
    </motion.li>
  );
};
