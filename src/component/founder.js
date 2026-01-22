"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Founder = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#101010] to-[#0D0D0D]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(190,149,69,0.08),transparent_60%)]"></div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[36px] font-medium text-[#BE9545] mb-2 tracking-wide"
            style={{ fontFamily: "var(--font-cinzel-regular)" }}
          >
            Meet the Founder
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-gray-400 text-[16px] leading-snug max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The vision and expertise behind Events OC
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-5">
              <p
                className="text-gray-300 text-[16.5px] leading-relaxed text-justify"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Adriano Tannous is the founder of Events OC, a Gold Coast–based events consultancy specialising in the planning and delivery of premium private and corporate events.
              </p>

              <p
                className="text-gray-300 text-[16.5px] leading-relaxed text-justify"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                With a background in hospitality, event operations, creative direction, and film, Adriano brings a strong understanding of structure, storytelling, and visual detail to every event. His approach focuses on clear planning, refined execution, and creating engaging guest experiences from start to finish.
              </p>

              <p
                className="text-gray-300 text-[16.5px] leading-relaxed text-justify"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Influenced by international perspectives and contemporary culture, Adriano works closely with clients to deliver well-considered events defined by quality, intention, and precision.
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#BE9545] to-[#7A5E39] rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative">
                <Image
                  src="/assets/img/founder.jpeg"
                  alt="Adriano Tannous - Founder of Events OC"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-[0_0_40px_-10px_rgba(190,149,69,0.3)] 
                           group-hover:shadow-[0_0_50px_-8px_rgba(190,149,69,0.5)] 
                           transition-all duration-500 w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Quote underneath the image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full text-center max-w-md"
            >
              <p
                className="text-[#BE9545] text-[18px] md:text-[20px] italic leading-relaxed"
                style={{ fontFamily: "var(--font-cinzel-regular)" }}
              >
                "Well-executed events, designed with intention."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;