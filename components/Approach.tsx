"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const myApproach = [
  {
    id: 1,
    title: "Phase 1",
    description: "",
    colors: "bg-emerald-900",
  },
  {
    id: 2,
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    colors: "bg-sky-600",
  },
  {
    id: 3,
    title: "Phase 3",
    description: "",
    colors: "bg-pink-900",
  },
];

const CardIcon = ({ className }: any) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(`${Math.random() / 1.8}s ease`);
  }, []);

  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transition: time,
      }}
    >
      <path
        d="M33.7812 16.8906C33.7812 17.1766 33.6677 17.4508 33.4655 17.653C33.2633 17.8552 32.9891 17.9688 32.7031 17.9688H17.9688V32.7031C17.9688 32.9891 17.8552 33.2633 17.653 33.4655C17.4508 33.6677 17.1766 33.7812 16.8906 33.7812C16.6047 33.7812 16.3305 33.6677 16.1283 33.4655C15.9261 33.2633 15.8125 32.9891 15.8125 32.7031V17.9688H1.07812C0.792188 17.9688 0.517963 17.8552 0.315775 17.653C0.113588 17.4508 0 17.1766 0 16.8906C0 16.6047 0.113588 16.3305 0.315775 16.1283C0.517963 15.9261 0.792188 15.8125 1.07812 15.8125H15.8125V1.07812C15.8125 0.792188 15.9261 0.517963 16.1283 0.315775C16.3305 0.113588 16.6047 0 16.8906 0C17.1766 0 17.4508 0.113588 17.653 0.315775C17.8552 0.517963 17.9688 0.792188 17.9688 1.07812V15.8125H32.7031C32.9891 15.8125 33.2633 15.9261 33.4655 16.1283C33.6677 16.3305 33.7812 16.6047 33.7812 16.8906Z"
        fill="#E4ECFF"
      />
    </svg>
  );
};

const variants = {
  hovered: {
    margin: "0 0 14px 0",
    transition: {
      duration: 2,
      ease: "ease",
    },
  },
  hidden: { margin: "0 0 0 0" },
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group border border-black/[0.2] group/canvas-card flex items-center justify-center
  dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[35rem] rounded-3xl"
      style={{
        background: "#04071d",
        backgroundColor: "linear-gradient(150deg, #04071d 0%, #0c0e23 100%)",
      }}
    >
      <CardIcon className="scale-0 group-hover:scale-[1] absolute w-[33px] h-[33px] top-[-12px] left-[-11px] dark:text-white text-black opacity-30" />
      <CardIcon className="scale-0 group-hover:scale-[1]  absolute w-[33px] h-[33px] top-[-12px] right-[-11px] dark:text-white text-black opacity-30" />
      <CardIcon className="scale-0 group-hover:scale-[1]  absolute w-[33px] h-[33px] bottom-[-12px] left-[-11px] dark:text-white text-black opacity-30" />
      <CardIcon className="scale-0 group-hover:scale-[1]  absolute w-[33px] h-[33px] bottom-[-12px] right-[-11px] dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h2 className="heading mb-12">
        My <span className="text-purple">approach</span>
      </h2>

      <div className="my-[10px] flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {myApproach.map(({ title, description }, idx) => {
          return (
            <Card
              key={idx}
              title={`${title}`}
              description={`${description}`}
              icon={<AceternityIcon order={idx + 1} />}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Approach;

const AceternityIcon = ({ order }: { order: number }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          Phase {order}
        </span>
      </button>
    </div>
  );
};
