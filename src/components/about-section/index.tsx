import React from "react";

import { about, avatarImage } from "@/constants/about";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SECTIONS } from "@/constants/navigation";
import SectionTitle from "@/components/section-title";
import SocialIcons from "@/components/social-icons";

const AboutSection = () => {
  const { name, initials, position, slogan } = about;
  return (
    <section id={SECTIONS.ABOUT} className="flex flex-col gap-12">
      <div className="flex gap-16">
        <Avatar className="h-48 w-48">
          <AvatarImage src={avatarImage} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-4xl sm:text-5xl mb-3 tracking-tight">{name}</h1>
          <h2 className="text-lg font-medium mb-4">{position}</h2>
          <div className="max-w-96 mb-4">
            <p>{slogan}</p>
          </div>
          <SocialIcons />
        </div>
      </div>
      <div>
        <SectionTitle text={SECTIONS.ABOUT} />
        <p>
          {
            "Hello! I'm John, a frontend developer based in New York City. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences."
          }
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
