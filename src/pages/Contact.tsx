import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Linkedin, MessageSquare, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    role: 'student',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
        role: 'student',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-4xl mb-12">
          Have questions, suggestions, or want to collaborate with The Student Spot?
          We'd love to hear from you! Fill out the form below or reach out to us through our social media channels.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  I am a
                </label>
                <select
                  id="role"
                  name="role"
                  value={formState.role}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="recruiter">Recruiter/HR</option>
                  <option value="educator">Educator</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-full flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-xl shadow-md p-8 h-full">
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Community Channels</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://chat.whatsapp.com/LxA5xaAdlKp3nvZmIGxLcp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <MessageSquare className="w-5 h-5 mr-3" />
                      <span>WhatsApp Community</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://whatsapp.com/channel/0029Vb6ft6072WTxJ5eMKA2I"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <MessageSquare className="w-5 h-5 mr-3" />
                      <span>WhatsApp Channel</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/thestudentspot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <MessageSquare className="w-5 h-5 mr-3" />
                      <span>Telegram Channel</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://www.instagram.com/the_studentspot/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <Instagram className="w-5 h-5 mr-3" />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/thestudentspot/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/the_studentspot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      <span>Twitter (X)</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@thestudentspot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <Youtube className="w-5 h-5 mr-3" />
                      <span>YouTube</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Founder Contact</h3>
                <p className="text-gray-600 mb-3">
                  For direct inquiries, you can reach out to our founder:
                </p>
                <a
                  href="https://www.linkedin.com/in/rajkamalprls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex items-center"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Rajkamal Panthagani
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
