import React, { FC } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

const socialContacts = [
  {
    name: "telegram",
    icon: <FaTelegramPlane />,
    href: "#",
  },
  {
    name: "whatsapp",
    icon: <FaWhatsapp />,
    href: "#",
  },
  {
    name: "email",
    icon: <MdAlternateEmail />,
    href: "#",
  },
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    href: "#",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    href: "#",
  },
];

const SocialIcons: FC<Props> = ({ className }) => {
  return (
    <ul className={clsx("flex gap-5 items-center", className)}>
      {socialContacts.map((item) => (
        <li key={item.name}>
          <a href={item.href} target="_blank">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
