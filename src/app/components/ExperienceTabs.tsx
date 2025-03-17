"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FullStackContent from "./FullStackContent";
import DevOpsContent from "./DevOpsContent";

interface ExperienceTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ExperienceTabs = ({ activeTab, setActiveTab }: ExperienceTabsProps) => {
  const tabs = [
    { id: "fullstack", label: "Full Stack" },
    { id: "devops", label: "DevOps" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center mb-8 sm:mb-12 gap-5">
        <div className="w-full max-w-xs sm:max-w-md inline-flex p-1 rounded-lg bg-gray-900/70 backdrop-blur-sm ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 py-2 px-3 sm:px-6 rounded-md font-medium text-sm sm:text-base cursor-pointer border transition-all duration-300 ${
                activeTab === tab.id
                  ? tab.id === "fullstack"
                    ? "text-orange-200 "
                    : "text-blue-200"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  className={`absolute inset-0 rounded-md ${
                    tab.id === "fullstack"
                      ? "bg-fsNeon-primary"
                      : "bg-devopsNeon-primary"
                  }`}
                  layoutId="tabBackground"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-7xl mx-auto"
        >
          {activeTab === "fullstack" ? <FullStackContent /> : <DevOpsContent />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExperienceTabs;
