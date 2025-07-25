import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Search, Filter, MapPin, Building, Calendar } from 'lucide-react';

// Mock job data - this would come from an API in a real application
const jobsData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Development',
    postedDate: '2024-12-15',
    description: 'Looking for a skilled Frontend Developer with experience in React, TypeScript, and modern CSS frameworks.',
    requirements: ['3+ years of React experience', 'TypeScript proficiency', 'CSS-in-JS knowledge'],
    applicationLink: '#'
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'Remote',
    type: 'Contract',
    category: 'Design',
    postedDate: '2024-12-14',
    description: 'Seeking a creative UX/UI Designer to work on innovative digital products.',
    requirements: ['Figma expertise', 'User research experience', 'Wireframing skills'],
    applicationLink: '#'
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Data Science',
    postedDate: '2024-12-10',
    description: 'Join our data science team to build machine learning models and extract insights from complex datasets.',
    requirements: ['Python', 'Machine Learning', 'SQL', 'Data visualization'],
    applicationLink: '#'
  },
  {
    id: 4,
    title: 'Content Marketing Intern',
    company: 'MediaGrowth',
    location: 'Delhi',
    type: 'Internship',
    category: 'Marketing',
    postedDate: '2024-12-08',
    description: 'Great opportunity for students interested in content creation and digital marketing.',
    requirements: ['Strong writing skills', 'Social media knowledge', 'SEO basics'],
    applicationLink: '#'
  },
  {
    id: 5,
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Development',
    postedDate: '2024-12-05',
    description: 'Looking for a Full Stack Developer with experience in MERN or MEAN stack.',
    requirements: ['JavaScript/TypeScript', 'React or Angular', 'Node.js', 'MongoDB'],
    applicationLink: '#'
  },
  {
    id: 6,
    title: 'Product Manager',
    company: 'InnovateCo',
    location: 'Pune',
    type: 'Full-time',
    category: 'Management',
    postedDate: '2024-12-01',
    description: 'Experienced Product Manager needed to lead product development for our SaaS platform.',
    requirements: ['5+ years in product management', 'Technical background', 'Agile methodologies'],
    applicationLink: '#'
  }
];

const JobOpportunities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Get unique categories, job types, and locations for filters
  const categories = [...new Set(jobsData.map(job => job.category))];
  const jobTypes = [...new Set(jobsData.map(job => job.type))];
  const locations = [...new Set(jobsData.map(job => job.location))];

  // Filter jobs based on search term and filters
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === '' || job.category === selectedCategory;
    const matchesType = selectedType === '' || job.type === selectedType;
    const matchesLocation = selectedLocation === '' || job.location === selectedLocation;

    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedType('');
    setSelectedLocation('');
  };

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Job Opportunities</h1>
        <p className="text-xl text-gray-600 max-w-4xl mb-12">
          Explore the latest internships and job opportunities shared by our community partners.
          Find positions that match your skills and career aspirations.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-4 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">All Types</option>
              {jobTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">All Locations</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="w-full btn btn-secondary flex items-center justify-center gap-2"
            >
              <Filter size={18} />
              Reset Filters
            </button>
          </div>
        </div>
      </motion.div>

      {/* Job Listings */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Briefcase className="mr-2" size={24} />
          {filteredJobs.length} {filteredJobs.length === 1 ? 'Opportunity' : 'Opportunities'} Available
        </h2>

        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">No jobs found matching your criteria. Try adjusting your filters.</p>
            <button
              onClick={resetFilters}
              className="mt-4 btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="mt-2 md:mt-0">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${job.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                          job.type === 'Part-time' ? 'bg-blue-100 text-blue-800' :
                            job.type === 'Contract' ? 'bg-purple-100 text-purple-800' :
                              'bg-orange-100 text-orange-800'
                        }`}>
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Building size={16} className="mr-1" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>Posted on {new Date(job.postedDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={job.applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full md:w-auto"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Post a Job CTA */}
      <motion.div
        className="bg-orange-50 rounded-xl p-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Are You a Recruiter?</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          If you're looking to hire talented students and professionals, you can post your job or internship openings on The Student Spot.
          Connect with our community of 5000+ skilled candidates.
        </p>
        <a
          href="/contact"
          className="btn btn-primary"
        >
          Post a Job
        </a>
      </motion.div>

    </div>
  );
};

export default JobOpportunities;
