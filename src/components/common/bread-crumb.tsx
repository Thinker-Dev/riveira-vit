import { juanaMedium, oddvalRegular, oddvalSemiBold } from "@/app/fonts";
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

const BreadCrumb = ({ title, subtitle }: Props) => {
  return (
    <section className="flex items-center justify-center pb-10 flex-col space-y-4">
      {subtitle && <h4 className="text-paragraph text-base">{subtitle}</h4>}
      <h1
        className={`text-5xl font-bold uppercase ${oddvalSemiBold.className}`}
      >
        {title}
      </h1>
    </section>
  );
};

export default BreadCrumb;
