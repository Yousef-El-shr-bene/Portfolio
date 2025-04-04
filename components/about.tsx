"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a full stack developer who is very passionate about{" "}
        <span className="font-medium">
          coding and problem solving and building softwares{" "}
        </span>
        ,flexible in learning ,try as much as possible to do my best. After
        joining the college of social work, I felt that this is not my place, so
        I studied programming through YouTube, then I joined the Ministry of
        Communications FWD scholarship in JavaScript & react. I finished the
        scholarship and continued learning from YouTube until I became a
        full-stack next.js. Then I finished my university studies and completed
        my military service period, and I am now available for work. In the
        coming period, I am planning to join the Diploma in Computer Science and
        Artificial Intelligence at Cairo University. Wish me success.
      </p>
    </motion.section>
  );
}
