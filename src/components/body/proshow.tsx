import React from "react";
import BreadCrumb from "../common/bread-crumb";
import TeamCard from "./team/team-card";
import SlidingImages from "../SlidingImages";

export default function Proshow() {
  const team = [
    {
      name: "Dr. G. Viswanathan",
      role: "Chancellor",
      image: "/viswa.jpeg",
    },
    {
      name: "Mr. Sankar Viswanathan",
      role: "Vice President",
      image: "/sankar.jpeg",
    },
    {
      name: "Dr. Sekar Viswanathan",
      role: "Vice President",
      image: "/sekar.jpeg",
    },
    {
      name: "Dr. G V Selvam",
      role: "Vice President",
      image: "/selvam.jpeg",
    },
  ];
  return (
    <section className="py-16 overflow-x-hidden min-h-screen">
      <BreadCrumb title="Proshow Artists" />
      <SlidingImages />
    </section>
  );
}
