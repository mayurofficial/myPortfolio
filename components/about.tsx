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
    <SectionHeading>Experienced Front-End Engineer</SectionHeading>
    <p className="mb-3">
      As a creative front-end software engineer with 3+ years of experience, I specialize in building web and mobile applications using technologies such as React, Next.js, and React Native. My expertise lies in developing highly optimized and scalable solutions that ensure superior performance and efficiency, meeting the unique requirements of each product.
    </p>
  
    <p>
      My journey into front-end development began organically – starting my career as a content writer. I discovered a passion for creating engaging content and even built a blog on WordPress. However, encountering limitations led me to explore custom HTML and CSS, opening the door to front-end development. Recognizing my aptitude for creativity and problem-solving, I found a perfect fit in front-end engineering. Combining these skills has proven to be a successful formula for delivering innovative and effective solutions in this dynamic field.
    </p>
  </motion.section>
  
  );
}
