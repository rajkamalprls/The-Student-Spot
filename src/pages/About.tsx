import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  Award,
  Sparkles,
  Lightbulb,
  Globe,
  User
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About The Student Spot
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The Student Spot is a dynamic platform designed to bridge the gap between students, professionals, and recruiters.
          Our community has grown to over 2000+ members across India, united by a passion for learning, growth, and career development.
        </motion.p>
      </section>

      {/* Mission and Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <motion.div
          className="bg-white rounded-xl p-8 shadow-md relative overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
          <div className="mb-4">
            <Target className="w-10 h-10 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To create a supportive ecosystem where opportunities meet talent. We aim to empower students and young professionals
            with the resources, connections, and guidance they need to thrive in their careers and personal growth.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-8 shadow-md relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
          <div className="mb-4">
            <Sparkles className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the premier platform that connects passionate learners with industry opportunities, fostering a
            community where collaboration, knowledge sharing, and growth are at the core of everything we do.
          </p>
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community First</h3>
            <p className="text-gray-600">
              We believe in the power of community and collective growth. Everyone has something to contribute and learn.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p className="text-gray-600">
              We foster a culture of lifelong learning and skill development, encouraging curiosity and growth.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, from the resources we share to the events we organize.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
            <p className="text-gray-600">
              We welcome members from all backgrounds, disciplines, and experience levels, creating a diverse and enriching community.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of working together and sharing knowledge to achieve greater outcomes for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mb-16">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Founder
        </motion.h2>

        <motion.div
          className="bg-white p-8 rounded-xl shadow-md overflow-hidden md:flex"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden">
              <img
                src="founder.jpeg" // Replace with your actual image path
                alt="Rajkamal Panthagani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-bold mb-2">Rajkamal Panthagani</h3>
            <p className="text-orange-600 font-medium mb-4">Founder & CEO, The Student Spot</p>
            <p className="text-gray-600 mb-6">
              Rajkamal founded The Student Spot with a vision to create a platform where students and professionals could connect,
              learn, and grow together. With a passion for technology and education, he has grown the community to over 2000 members
              from across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/rajkamalprls"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://linktr.ee/rajkamal_prls"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Linktree
              </a>
            </div>
          </div>
        </motion.div>
      </section>


      {/* Join Us CTA */}
      <section className="bg-orange-50 p-8 md:p-12 rounded-xl">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Be Part of Our Community
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join The Student Spot today and connect with peers, explore opportunities, and grow your skills alongside a
            community of passionate learners and professionals.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/login" className="btn btn-primary">
              Join Now
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;
