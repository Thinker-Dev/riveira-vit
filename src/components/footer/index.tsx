import { oddvalLight, oddvalSemiBold } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footer = [
  {
    name: "Socials",
    items: [
      {
        link: "https://www.instagram.com/rivieravituniversity/",
        name: "Instagram",
      },
      {
        link: "https://www.youtube.com/@riviera-vituniversity5936",
        name: "Youtube",
      },
      {
        link: "https://www.linkedin.com/school/riviera-vit-university/",
        name: "LinkedIn",
      },
      {
        link: "https://www.facebook.com/rivieraVITUniversity",
        name: "Facebook",
      },
    ],
  },
  {
    name: "Links",
    items: [
      { link: "/", name: "Home" },
      { link: "/team", name: "Team" },
      { link: "/faq", name: "Accomodations" },
      { link: "/faq", name: "FAQs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <section className="py-20 space-y-7">
        <div className="max-w-screen-xl mx-auto px-4 max-lg:px-5 space-y-14">
          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
            <div className="md:w-1/3">
              <Link
                href={"/"}
                className="font-semibold flex items-center space-x-2 w-fit"
              >
                <Image
                  alt="logo"
                  src={"/riveira.svg"}
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <div className="flex flex-row">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                {footer.map((section, index) => (
                  <div key={index} className="flex flex-col">
                    <h2
                      className={`text-lg font-semibold mb-2 ${oddvalSemiBold.className}`}
                    >
                      {section.name}
                    </h2>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            href={item.link}
                            className={`text-white/50 text-sm hover:underline transition-all ${oddvalLight.className}`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <h2
                  className={`text-lg font-semibold mb-2 ${oddvalSemiBold.className}`}
                >
                  Contact Us
                </h2>
                <ul className="space-y-2">
                  <li>
                    <div
                      className={`text-white/50 hover:underline transition-all ${oddvalLight.className}`}
                    >
                      Dr K Gokul Kumar
                    </div>
                  </li>
                  <li>
                    <div
                      className={`text-white/50 hover:underline transition-all ${oddvalLight.className}`}
                    >
                      Convenor, Riveira
                      <span className="font-sans">&apos; 24</span>
                    </div>
                  </li>
                  <li>
                    <Link
                      href={"mailto:convenor.riviera@vit.ac.in"}
                      className={`text-white/50 hover:underline transition-all ${oddvalLight.className}`}
                    >
                      convenor.riviera
                      <span className="font-sans">@</span>
                      vit.ac.in
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
