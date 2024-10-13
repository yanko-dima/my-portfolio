import React, { FC } from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  technologies: string[];
}

const Technologies: FC<Props> = ({ technologies }) => {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {technologies.map((item) => (
        <li key={item}>
          <Badge variant="outline">{item}</Badge>
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
