// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Hari Prompt Solutions. All rights reserved.</p>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.pinterest.com/PromptwithMe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
             Pinterest
          </a>
          <a
            href="/contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

          <a
            href="https://www.linkedin.com/in/hari-suthan-01665433b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
               My LinkedIn Profile
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
