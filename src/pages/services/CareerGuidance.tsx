import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Compass, Users, Award, BookOpen } from 'lucide-react';

const CareerGuidance: React.FC = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Guidance</h1>
        <p className="text-xl text-gray-600 max-w-4xl mb-12">
          Get expert guidance to navigate your career path and make informed decisions about your professional future.
          Our career counseling services are designed to help you identify your strengths and align them with the right opportunities.
        </p>
      </motion.div>

      {/* Services Grid */}
      <section className="mb-16">
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
            <h3 className="text-xl font-bold mb-3">Career Assessment</h3>
            <p className="text-gray-600">
              Comprehensive assessment of your skills, interests, and aptitude to identify suitable career paths.
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
              <Compass className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Career Planning</h3>
            <p className="text-gray-600">
              Develop a structured career plan with clear goals and actionable steps to achieve them.
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
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Industry Insights</h3>
            <p className="text-gray-600">
              Get valuable insights about different industries and current market trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="section-title mb-10">Our Guidance Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Initial Assessment</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-orange-600 font-semibold">1</span>
                </div>
                <p className="text-gray-600">Complete a comprehensive skills and interests assessment</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-orange-600 font-semibold">2</span>
                </div>
                <p className="text-gray-600">One-on-one consultation with a career counselor</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-orange-600 font-semibold">3</span>
                </div>
                <p className="text-gray-600">Review of academic and professional background</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Career Planning</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-orange-600 font-semibold">4</span>
                </div>
                <p className="text-gray-600">Development of personalized career roadmap</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-orange-600 font-semibold">5</span>
                </div>
                <p className="text-gray-600">Skill gap analysis and learning recommendations</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-orange-600 font-semibold">6</span>
                </div>
                <p className="text-gray-600">Regular progress tracking and plan adjustments</p>
              </li>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Schedule a free consultation with our career counselors and take the first step towards your dream career.
        </p>
        <a
          href="/login"
          className="btn bg-white text-orange-600 hover:bg-gray-100 inline-flex items-center"
        >
          Schedule Consultation
        </a>
      </motion.section>
    </div>
  );
};

export default CareerGuidance;