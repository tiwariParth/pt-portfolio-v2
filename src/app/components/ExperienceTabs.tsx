'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FullStackContent from './FullStackContent';
import DevOpsContent from './DevOpsContent';

interface ExperienceTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ExperienceTabs = ({ activeTab, setActiveTab }: ExperienceTabsProps) => {
  const tabs = [
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'devops', label: 'DevOps' },
  ];

  return (
    <div>
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-lg bg-gray-800/50 backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-2 px-6 rounded-md font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? tab.id === 'fullstack'
                    ? 'text-fsNeon-dark'
                    : 'text-devopsNeon-dark'
                  : 'text-white'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  className={`absolute inset-0 rounded-md ${
                    tab.id === 'fullstack'
                      ? 'bg-fsNeon-primary'
                      : 'bg-devopsNeon-primary'
                  }`}
                  layoutId="tabBackground"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
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
        >
          {activeTab === 'fullstack' ? <FullStackContent /> : <DevOpsContent />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExperienceTabs;