import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Code, 
  Database, 
  Fingerprint, 
  Award, 
  BookMarked,
  Monitor,
  Cpu,
  Cloud,
  FileText,
  LineChart,
  ExternalLink
} from 'lucide-react';

// Mock resource data - would come from an API in a real app
const resources = [
  {
    id: 1,
    title: 'Web3 Development & Blockchain',
    icon: <Fingerprint className="w-10 h-10 text-orange-500" />,
    items: [
      { name: 'Blockchain Fundamentals', link: '#', type: 'Course' },
      { name: 'Smart Contract Development with Solidity', link: '#', type: 'Tutorial' },
      { name: 'Web3.js & Ethers.js Guide', link: '#', type: 'Documentation' },
      { name: 'DApp Development with React', link: '#', type: 'Workshop' },
    ]
  },
  {
    id: 2,
    title: 'Data Science & Analytics',
    icon: <Database className="w-10 h-10 text-orange-500" />,
    items: [
      { name: 'Python for Data Science', link: '#', type: 'Course' },
      { name: 'Machine Learning Fundamentals', link: '#', type: 'Tutorial' },
      { name: 'Data Visualization with Matplotlib & Seaborn', link: '#', type: 'Guide' },
      { name: 'Statistical Analysis for Beginners', link: '#', type: 'Workshop' },
    ]
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    icon: <Cpu className="w-10 h-10 text-orange-500" />,
    items: [
      { name: 'TensorFlow & PyTorch Essentials', link: '#', type: 'Course' },
      { name: 'Neural Networks Explained', link: '#', type: 'Guide' },
      { name: 'Natural Language Processing', link: '#', type: 'Workshop' },
      { name: 'Computer Vision Applications', link: '#', type: 'Tutorial' },
    ]
  },
  {
    id: 4,
    title: 'Python Programming',
    icon: <Code className="w-10 h-10 text-orange-500" />,
    items: [
      { name: 'Python Basics for Beginners', link: '#', type: 'Course' },
      { name: 'Advanced Python Techniques', link: '#', type: 'Tutorial' },
      { name: 'Python for Web Development', link: '#', type: 'Workshop' },
      { name: 'Python Libraries for Data Processing', link: '#', type: 'Guide' },
    ]
  },
  {
    id: 5,
    title: 'Web Development',
    icon: <Monitor className="w-10 h-10 text-orange-500" />,
    items: [
      { name: 'Modern JavaScript', link: '#', type: 'Course' },
      { name: 'React & Next.js', link: '#', type: 'Tutorial' },
      { name: 'Responsive Design Fundamentals', link: '#', type: 'Guide' },
      { name: 'Backend Development with Node.js', link: '#', type: 'Workshop' },
    ]
  },
  {
    id: 6,
    title: 'Cloud Servers & DevOps',
    icon: <Cloud className="w-10 h-10 text-orange-500" />,
    items: [
      { name: 'AWS Fundamentals', link: '#', type: 'Course' },
      { name: 'Docker & Kubernetes', link: '#', type: 'Tutorial' },
      { name: 'CI/CD Pipeline Setup', link: '#', type: 'Guide' },
      { name: 'Serverless Architecture', link: '#', type: 'Workshop' },
    ]
  },
  {
    id: 7,
    title: 'Career Development',
    icon: <Award className="w-10 h-10 text-orange-500" />,
    items: [
      { name: 'Resume Building Workshop', link: '#', type: 'Workshop' },
      { name: 'Technical Interview Preparation', link: '#', type: 'Guide' },
      { name: 'Networking for Professionals', link: '#', type: 'Course' },
      { name: 'Effective Communication Skills', link: '#', type: 'Tutorial' },
    ]
  },
  {
    id: 8,
    title: 'Entrepreneurship',
    icon: <LineChart className="w-10 h-10 text-orange-500" />,
    items: [
      { name: 'Startup Fundamentals', link: '#', type: 'Course' },
      { name: 'Business Model Canvas', link: '#', type: 'Guide' },
      { name: 'Funding & Venture Capital', link: '#', type: 'Workshop' },
      { name: 'Product Market Fit', link: '#', type: 'Tutorial' },
    ]
  }
];

const Resources: React.FC = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Resources</h1>
        <p className="text-xl text-gray-600 max-w-4xl mb-12">
          Access our curated collection of learning materials, tutorials, and tools to enhance your skills and knowledge.
          These resources cover a wide range of topics to support your career growth and professional development.
        </p>
      </motion.div>

      {/* Featured Resources */}
      <section className="mb-16">
        <h2 className="section-title mb-10">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
              <BookOpen className="w-20 h-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Tech Interview Preparation Guide</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to ace technical interviews at top companies, with practice problems and strategies.
              </p>
              <a href="#" className="btn btn-primary w-full">Access Guide</a>
            </div>
          </motion.div>

          <motion.div 
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <BookMarked className="w-20 h-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Resume Building Workshop</h3>
              <p className="text-gray-600 mb-4">
                Learn how to create an ATS-friendly resume that stands out to recruiters and highlights your skills effectively.
              </p>
              <a href="#" className="btn btn-primary w-full">Watch Recording</a>
            </div>
          </motion.div>

          <motion.div 
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
              <FileText className="w-20 h-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Free Learning Resources Collection</h3>
              <p className="text-gray-600 mb-4">
                Curated list of free courses, tutorials, and tools for web development, data science, and more.
              </p>
              <a href="#" className="btn btn-primary w-full">View Collection</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="mb-16">
        <h2 className="section-title mb-10">Resource Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((category, index) => (
            <motion.div 
              key={category.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{item.type}</span>
                      </div>
                      <a href={item.link} className="text-orange-600 hover:text-orange-700">
                        <ExternalLink size={16} />
                      </a>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="mt-6 inline-block text-orange-600 font-medium hover:text-orange-700">
                  View all resources in this category →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contribution CTA */}
      <motion.section 
        className="bg-orange-50 rounded-xl p-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Have Something to Share?</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          If you've created tutorials, courses, or have valuable resources to share with our community, 
          we'd love to feature your content. Help others learn and grow!
        </p>
        <Link to="/login" className="btn btn-primary">
          Contribute Resources
        </Link>
      </motion.section>
    </div>
  );
};

export default Resources;
