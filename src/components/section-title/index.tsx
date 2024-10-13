import React, { FC } from "react";

interface Props {
  text: string;
}

const SectionTitle: FC<Props> = ({ text }) => {
  return (
    <h2 className="text-sm font-bold uppercase tracking-widest mb-6">{text}</h2>
  );
};

export default SectionTitle;
