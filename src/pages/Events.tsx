import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink,
  Filter,
  ArrowRight
} from 'lucide-react';

// Mock events data - would come from an API in a real app
const eventsData = [
  {
    id: 1,
    title: 'Web3 Development Workshop',
    date: '2025-01-15',
    time: '3:00 PM - 5:00 PM IST',
    location: 'Online (Zoom)',
    type: 'Workshop',
    category: 'Development',
    speaker: 'Arjun Sharma, Blockchain Developer',
    description: 'Learn the fundamentals of Web3 development and how to build decentralized applications using Ethereum.',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Mastering Data Science with Python',
    date: '2025-01-20',
    time: '6:00 PM - 8:00 PM IST',
    location: 'Hyderabad Tech Hub',
    type: 'Workshop',
    category: 'Data Science',
    speaker: 'Priya Desai, Senior Data Scientist',
    description: 'Hands-on workshop covering Python libraries for data analysis, visualization, and machine learning.',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Career Opportunities in AI',
    date: '2025-01-25',
    time: '4:00 PM - 5:30 PM IST',
    location: 'Online (Google Meet)',
    type: 'Webinar',
    category: 'Career',
    speaker: 'Rahul Mehta, AI Research Lead',
    description: 'Explore various career paths and opportunities in the growing field of Artificial Intelligence.',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Tech Startup Networking Mixer',
    date: '2025-02-05',
    time: '6:30 PM - 9:00 PM IST',
    location: 'Bangalore Innovation Center',
    type: 'Networking',
    category: 'Entrepreneurship',
    speaker: 'Various Startup Founders',
    description: 'Connect with tech startup founders, investors, and like-minded professionals in this casual networking event.',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'Frontend Development Bootcamp',
    date: '2025-02-10',
    time: '10:00 AM - 4:00 PM IST',
    location: 'Online (Zoom)',
    type: 'Bootcamp',
    category: 'Development',
    speaker: 'Neha Patel, Senior Frontend Engineer',
    description: 'Intensive one-day bootcamp covering modern frontend technologies including React, TypeScript, and CSS frameworks.',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    title: 'Technical Interview Preparation',
    date: '2025-02-15',
    time: '5:00 PM - 7:00 PM IST',
    location: 'Online (Google Meet)',
    type: 'Workshop',
    category: 'Career',
    speaker: 'Vikram Singh, Tech Recruiter',
    description: 'Learn effective strategies to prepare for and ace technical interviews at top tech companies.',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// Past events - simplified version of the above
const pastEventsData = [
  {
    id: 101,
    title: 'Introduction to Machine Learning',
    date: '2024-12-10',
    type: 'Workshop',
    category: 'Data Science'
  },
  {
    id: 102,
    title: 'Resume Building Masterclass',
    date: '2024-12-05',
    type: 'Webinar',
    category: 'Career'
  },
  {
    id: 103,
    title: 'Cloud Computing Essentials',
    date: '2024-11-28',
    type: 'Workshop',
    category: 'Development'
  },
  {
    id: 104,
    title: 'Startup Funding Strategies',
    date: '2024-11-15',
    type: 'Panel Discussion',
    category: 'Entrepreneurship'
  }
];

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Get unique categories and event types for filters
  const categories = [...new Set(eventsData.map(event => event.category))];
  const eventTypes = [...new Set(eventsData.map(event => event.type))];

  // Filter events based on filters
  const filteredEvents = eventsData.filter(event => {
    const matchesCategory = selectedCategory === '' || event.category === selectedCategory;
    const matchesType = selectedType === '' || event.type === selectedType;
    
    return matchesCategory && matchesType;
  });

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedType('');
  };

  // Format date to display in a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Workshops</h1>
        <p className="text-xl text-gray-600 max-w-4xl mb-12">
          Stay updated with our upcoming events, workshops, webinars, and other learning opportunities. 
          Join us to enhance your skills, network with professionals, and grow your career.
        </p>
      </motion.div>

      {/* Featured Event */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="section-title mb-8">Featured Event</h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex">
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img 
              src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Tech Career Fair" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
              Jan 30, 2025
            </div>
          </div>
          
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Career Fair
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                In-Person
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Annual Tech Career Fair 2025</h3>
            
            <div className="flex flex-col space-y-3 mb-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                <span>January 30, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-orange-600" />
                <span>10:00 AM - 5:00 PM IST</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                <span>Hyderabad International Convention Center</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-orange-600" />
                <span>20+ Companies Participating</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Join us for our annual Tech Career Fair featuring top companies from across India. 
              This is your opportunity to connect with recruiters, explore job opportunities, and attend career development workshops.
            </p>
            
            <a href="#" className="btn btn-primary">
              Register Now
            </a>
          </div>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="md:w-1/3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Category</label>
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
            
            <div className="md:w-1/3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">All Types</option>
                {eventTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className="md:w-1/3">
              <button 
                onClick={resetFilters}
                className="w-full btn btn-secondary flex items-center justify-center"
              >
                <Filter size={18} className="mr-2" />
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="section-title mb-8">Upcoming Events</h2>
        
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">No events found matching your criteria. Try adjusting your filters.</p>
            <button 
              onClick={resetFilters}
              className="mt-4 btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="h-48 relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white text-orange-600 px-3 py-1 rounded-lg font-semibold text-sm">
                    {formatDate(event.date)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  
                  <div className="flex flex-col space-y-2 mb-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-orange-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-orange-600" />
                      <span>{event.speaker}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <a 
                    href={event.registrationLink} 
                    className="btn btn-primary w-full"
                  >
                    Register
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Past Events */}
      <section className="mb-16">
        <h2 className="section-title mb-8">Past Events</h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {pastEventsData.map((event, index) => (
              <motion.li 
                key={event.id}
                className="p-4 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-gray-600 text-sm">{formatDate(event.date)}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-600 text-sm">{event.type}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-600 text-sm">{event.category}</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="text-orange-600 flex items-center mt-2 md:mt-0 hover:text-orange-700 text-sm font-medium"
                  >
                    View Recording
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
          
          <div className="p-4 border-t border-gray-100 text-center">
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center">
              View all past events
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Host an Event CTA */}
      <motion.section 
        className="bg-orange-50 rounded-xl p-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Want to Host an Event?</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          If you're interested in hosting a workshop, webinar, or any other event for The Student Spot community,
          we'd love to collaborate with you. Share your expertise and help our members grow!
        </p>
        <Link to="/login" className="btn btn-primary">
          Propose an Event
        </Link>
      </motion.section>
    </div>
  );
};

export default Events;
