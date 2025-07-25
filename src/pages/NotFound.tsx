import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div 
        className="text-center max-w-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved. 
          Please check the URL or return to the homepage.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;