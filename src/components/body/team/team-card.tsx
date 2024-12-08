import React from "react";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="relative z-10">
        <div className="mb-6 h-[200px] overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className={`text-base font-bold text-white mb-1 `}>{name}</h3>
        <p className={`text-primary text- mb-4`}>{role}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

export default TeamCard;
