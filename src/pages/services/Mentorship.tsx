import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Target, Users, Award, BookOpen, Star } from 'lucide-react';

const Mentorship: React.FC = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentorship Program</h1>
        <p className="text-xl text-gray-600 max-w-4xl mb-12">
          Connect with experienced professionals who can guide you through your career journey.
          Our mentorship program pairs you with industry experts who provide personalized guidance
          and support to help you achieve your professional goals.
        </p>
      </motion.div>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="section-title mb-10">Program Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Guidance</h3>
            <p className="text-gray-600">
              Get one-on-one mentoring sessions tailored to your specific career goals and challenges.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Industry Connections</h3>
            <p className="text-gray-600">
              Build valuable professional relationships and expand your network within your industry.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Skill Development</h3>
            <p className="text-gray-600">
              Learn practical skills and get insights into industry best practices from experienced professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="section-title mb-10">How It Works</h2>
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Getting Started</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-semibold">1</span>
                  </div>
                  <p className="text-gray-600">Complete the mentorship application form</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-semibold">2</span>
                  </div>
                  <p className="text-gray-600">Initial consultation to understand your goals</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-semibold">3</span>
                  </div>
                  <p className="text-gray-600">Match with a suitable mentor</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">The Journey</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-semibold">4</span>
                  </div>
                  <p className="text-gray-600">Regular one-on-one mentoring sessions</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-semibold">5</span>
                  </div>
                  <p className="text-gray-600">Progress tracking and goal adjustment</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-semibold">6</span>
                  </div>
                  <p className="text-gray-600">Access to exclusive resources and workshops</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentorship Areas */}
      <section className="mb-16">
        <h2 className="section-title mb-10">Mentorship Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Technology</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Web Development</li>
              <li>• Data Science</li>
              <li>• Cloud Computing</li>
              <li>• Artificial Intelligence</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Business</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Project Management</li>
              <li>• Digital Marketing</li>
              <li>• Entrepreneurship</li>
              <li>• Business Strategy</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Career Development</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Leadership Skills</li>
              <li>• Communication</li>
              <li>• Personal Branding</li>
              <li>• Career Transition</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Mentorship Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Take the first step towards accelerating your career growth with personalized mentorship.
        </p>
        <a
          href="/login"
          className="btn bg-white text-orange-600 hover:bg-gray-100 inline-flex items-center"
        >
          Apply for Mentorship
        </a>
      </motion.section>
    </div>
  );
};

export default Mentorship;