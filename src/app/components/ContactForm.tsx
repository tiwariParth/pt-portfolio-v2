"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimesCircle } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("There was an error submitting your message. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "your.email@example.com",
      required: true,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What is this regarding?",
      required: true,
    },
  ];

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-fsNeon-primary/10 to-devopsNeon-primary/10 rounded-xl blur-xl -z-10 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fsNeon-dark/30 rounded-xl -z-10"></div>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center p-6 sm:p-8 rounded-xl border-2 border-fsNeon-primary/50 bg-fsNeon-dark/50 backdrop-blur-sm"
          >
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-16 h-16 mx-auto bg-fsNeon-primary/20 rounded-full flex items-center justify-center"
              >
                <FaPaperPlane className="text-2xl text-fsNeon-primary" />
              </motion.div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-fsNeon-primary mb-4">
              Thank You!
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              Your message has been sent successfully. I'll get back to you as
              soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-fsNeon-primary/20 hover:bg-fsNeon-primary/30 text-fsNeon-primary rounded-lg transition-all duration-300"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-xl border-2 border-fsNeon-primary/50 bg-fsNeon-dark/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-md bg-red-500/20 border border-red-500/50 text-white flex items-start gap-3"
                >
                  <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className={field.id === "subject" ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={field.id}
                    className="block mb-2 text-sm font-medium text-fsNeon-light"
                  >
                    {field.label}{" "}
                    {field.required && (
                      <span className="text-fsNeon-primary">*</span>
                    )}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full p-3 rounded-md bg-fsNeon-dark/70 border border-fsNeon-primary/30 
                             text-white placeholder-gray-500 focus:border-fsNeon-primary focus:ring-1 
                             focus:ring-fsNeon-primary outline-none transition-all duration-300"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-fsNeon-light"
              >
                Message <span className="text-fsNeon-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 rounded-md bg-fsNeon-dark/70 border border-fsNeon-primary/30 
                         text-white placeholder-gray-500 focus:border-fsNeon-primary focus:ring-1 
                         focus:ring-fsNeon-primary outline-none transition-all duration-300 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button and Helper Text */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full sm:w-auto px-6 py-3 rounded-lg font-medium flex items-center justify-center
                  ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-fsNeon-primary/20 hover:bg-fsNeon-primary/30 text-fsNeon-primary"
                  }
                  transition-all duration-300
                `}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </span>
                )}
              </button>

              <p className="text-xs text-gray-500">
                Fields marked with{" "}
                <span className="text-fsNeon-primary">*</span> are required
              </p>
            </div>

            {/* Metadata */}
            <div className="text-xs text-gray-500 mt-6 pt-6 border-t border-fsNeon-primary/20 text-center sm:text-right">
              <p>Last updated: 2025-03-16 13:27:14</p>
              <p>Maintained by: tiwariParth</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
