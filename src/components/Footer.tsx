import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-600 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Mélanie Chenavard</h3>
            <p className="mb-4 text-gray-300">
              Experte en Organisation, Process et Productivité | COO Consultante
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:melbeperf@gmail.com"
                className="text-primary-400 hover:text-primary-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/33609222919"
                className="text-primary-400 hover:text-primary-300 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://ch.linkedin.com/in/melanie-chenavard-8118398b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="flex items-center mb-2 text-gray-300">
              <Mail size={16} className="mr-2 text-primary-400" />
              <a href="mailto:melbeperf@gmail.com" className="hover:text-primary-400 transition-colors">
                melbeperf@gmail.com
              </a>
            </p>
            <p className="flex items-center mb-2 text-gray-300">
              <Phone size={16} className="mr-2 text-primary-400" />
              <a href="https://wa.me/33609222919" className="hover:text-primary-400 transition-colors">
                +33 6 09 22 29 19
              </a>
            </p>
            <p className="flex items-center text-gray-300">
              <Linkedin size={16} className="mr-2 text-primary-400" />
              <a 
                href="https://ch.linkedin.com/in/melanie-chenavard-8118398b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Mélanie Chenavard | Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};