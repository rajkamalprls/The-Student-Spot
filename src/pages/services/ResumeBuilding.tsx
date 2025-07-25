import React from 'react';
import { motion } from 'framer-motion';
import { FileEdit, CheckCircle, Users, Award, Star, FileCheck } from 'lucide-react';

const ResumeBuilding: React.FC = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume Building Service</h1>
        <p className="text-xl text-gray-600 max-w-4xl mb-12">
          Create a professional, ATS-friendly resume that highlights your skills and experiences effectively.
          Our expert team will help you craft a compelling resume that stands out to recruiters.
        </p>
      </motion.div>

      {/* Features */}
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
              <FileCheck className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">ATS-Optimized</h3>
            <p className="text-gray-600">
              Ensure your resume passes through Applicant Tracking Systems with optimized formatting and keywords.
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
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Professional Templates</h3>
            <p className="text-gray-600">
              Choose from a variety of industry-specific, professionally designed resume templates.
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
            <h3 className="text-xl font-bold mb-3">Expert Review</h3>
            <p className="text-gray-600">
              Get your resume reviewed by industry professionals with years of recruitment experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="section-title mb-10">Our Resume Building Process</h2>
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Initial Consultation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                  <span className="text-gray-600">Review your current resume and career goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                  <span className="text-gray-600">Discuss your experience and achievements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                  <span className="text-gray-600">Select appropriate resume template</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Resume Development</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                  <span className="text-gray-600">Craft compelling achievement statements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                  <span className="text-gray-600">Optimize keywords for your industry</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                  <span className="text-gray-600">Format for ATS compatibility</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <h2 className="section-title mb-10">Resume Building Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Basic Package</h3>
              <p className="text-gray-600 mb-4">Perfect for students and fresh graduates</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">Professional Template</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">ATS Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">One Revision</span>
                </li>
              </ul>
              <a href="/contact" className="btn btn-primary w-full">Get Started</a>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-orange-500 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-lg">
              Popular
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Professional Package</h3>
              <p className="text-gray-600 mb-4">For experienced professionals</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">Everything in Basic</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">LinkedIn Profile Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">Two Revisions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">Cover Letter</span>
                </li>
              </ul>
              <a href="/contact" className="btn btn-primary w-full">Get Started</a>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Executive Package</h3>
              <p className="text-gray-600 mb-4">For senior professionals and executives</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">Executive Bio</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">Unlimited Revisions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-gray-600">Interview Preparation</span>
                </li>
              </ul>
              <a href="/contact" className="btn btn-primary w-full">Get Started</a>
            </div>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Resume?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get started with our professional resume building service and increase your chances of landing your dream job.
        </p>
        <a
          href="/contact"
          className="btn bg-white text-orange-600 hover:bg-gray-100 inline-flex items-center"
        >
          Get Started Now
        </a>
      </motion.section>
    </div>
  );
};

export default ResumeBuilding;