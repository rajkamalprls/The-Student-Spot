import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageSquare, Instagram as Telegram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../shared/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Logo className="h-12 w-auto mb-4" light />
            <p className="text-gray-400 mb-6">
              A growing community of 5000+ students and professionals from across India,
              dedicated to connecting talent with opportunities for growth and success.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://whatsapp.com/channel/0029Vb6ft6072WTxJ5eMKA2I"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="https://www.instagram.com/the_studentspot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
             
              <a
                href="https://www.linkedin.com/company/thestudentspot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

               <a
                href="https://x.com/the_studentspot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://t.me/thestudentspot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Telegram"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="https://youtube.com/@thestudentspot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/career-guidance" className="text-gray-400 hover:text-primary-500 transition-colors">Career Guidance</Link>
              </li>
              <li>
                <Link to="/services/resume-building" className="text-gray-400 hover:text-primary-500 transition-colors">Resume Building</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-primary-500 transition-colors">Study Resources</Link>
              </li>
              <li>
                <Link to="/services/mentorship" className="text-gray-400 hover:text-primary-500 transition-colors">Mentorship</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-primary-500 transition-colors">Events & Workshops</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://chat.whatsapp.com/LxA5xaAdlKp3nvZmIGxLcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  WhatsApp Community
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029Vb6ft6072WTxJ5eMKA2I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/thestudentspot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Telegram Channel
                </a>
              </li>
              <li>
                <a
                  href="https://bento.me/thestudentspot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Bento Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Hyderabad Telangana India ❤️🤍💚</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={20} className="mr-2" />
                <a href="tel:+919581929676" className="hover:text-primary-500 transition-colors">
                  +91 958 192 9676
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={20} className="mr-2" />
                <a
                  href="mailto:thestudentspotofficial@gmail.com"
                  className="hover:text-primary-500 transition-colors break-all"
                >
                  thestudentspotofficial@gmail.com
                </a>
              </li>
              <li>
                <Link to="/contact" className="btn btn-primary mt-4 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} The Student Spot. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
