'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  // Current metadata
  const lastUpdated = "2025-03-05 15:36:19";
  const maintainedBy = "tiwariParth";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-fsNeon-primary/20 to-devopsNeon-primary/20 rounded-xl blur-xl -z-10 opacity-50"></div>
      
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8 rounded-xl border-2 border-fsNeon-primary bg-fsNeon-dark/50 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-fsNeon-primary mb-4">Thank You!</h3>
          <p className="text-gray-300 mb-6">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn btn-primary"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <motion.form 
          onSubmit={handleSubmit}
          className="p-8 rounded-xl border-2 border-fsNeon-primary bg-fsNeon-dark/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error && (
            <div className="mb-6 p-4 rounded-md bg-red-500/20 border border-red-500 text-white">
              {error}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-fsNeon-light">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-fsNeon-dark/70 border border-fsNeon-primary/50 text-white focus:border-fsNeon-primary focus:ring-1 focus:ring-fsNeon-primary outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-fsNeon-light">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-fsNeon-dark/70 border border-fsNeon-primary/50 text-white focus:border-fsNeon-primary focus:ring-1 focus:ring-fsNeon-primary outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-fsNeon-light">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-fsNeon-dark/70 border border-fsNeon-primary/50 text-white focus:border-fsNeon-primary focus:ring-1 focus:ring-fsNeon-primary outline-none transition-all"
              placeholder="What is this regarding?"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-fsNeon-light">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded-md bg-fsNeon-dark/70 border border-fsNeon-primary/50 text-white focus:border-fsNeon-primary focus:ring-1 focus:ring-fsNeon-primary outline-none transition-all resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn ${isSubmitting ? 'bg-gray-600' : 'btn-primary'} flex items-center justify-center min-w-[150px]`}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
            
            <div className="text-xs text-gray-500">
              <span>Fields marked with * are required</span>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mt-6 text-right">
            <p>Last updated: {lastUpdated}</p>
            <p>Maintained by: {maintainedBy}</p>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default ContactForm;