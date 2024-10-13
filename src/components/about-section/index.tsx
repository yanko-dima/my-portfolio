import React from "react";

import { about, avatarImage } from "@/constants/about";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  const { name, initials, position, slogan } = about;
  return (
    <section className="flex flex-col gap-12">
      <div className="flex gap-16">
        <Avatar className="h-48 w-48">
          <AvatarImage src={avatarImage} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-4xl sm:text-5xl mb-3 tracking-tight">{name}</h1>
          <h2 className="text-lg font-medium mb-4">{position}</h2>
          <div className="max-w-96">
            <p>{slogan}</p>
          </div>
        </div>
      </div>
      <div>
        Hello! I'm John, a frontend developer based in New York City. I enjoy
        creating things that live on the internet, whether that be websites,
        applications, or anything in between. My goal is to always build
        products that provide pixel-perfect, performant experiences.
      </div>
    </section>
  );
};

export default AboutSection;
