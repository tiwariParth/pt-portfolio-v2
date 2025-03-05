"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/app/components/HeroSection";
import ExperienceTabs from "@/app/components/ExperienceTabs";
import ContactForm from "@/app/components/ContactForm";
import AboutSection from "@/app/components/AboutSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("fullstack");

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />

      <section id="experience" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span
              className={
                activeTab === "fullstack" ? "glow-text-fs" : "glow-text-devops"
              }
            >
              My Experience
            </span>
          </h2>

          <ExperienceTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-4 md:px-8 bg-opacity-30 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="glow-text-fs">Get In Touch</span>
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
