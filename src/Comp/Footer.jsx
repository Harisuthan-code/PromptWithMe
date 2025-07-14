// src/components/Footer.jsx

import { Link } from 'react-router-dom'; // Make sure you're using React Router

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Hari Prompt Solutions. All rights reserved.</p>

        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-sm">

          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>


          {/* Legal Internal Links */}
          <Link to="/refund-policy" className="hover:text-white transition">
            Refund Policy
          </Link>

          <Link to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>

          <Link to="/terms-and-conditions" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
