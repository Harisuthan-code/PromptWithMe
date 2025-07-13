// src/pages/Contact.jsx
const Contact = () => {
  return (
    <main className="bg-white text-gray-800 px-6 py-20 flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Whether its a collab, custom prompt request, or just a question — I'm here to help.
        </p>

        {/* Email */}
        <p className="text-lg text-gray-700 font-medium mb-2">
          📧 Email:{" "}
          <a
            href="mailto:hari.promptsolutions@gmail.com"
            className="text-blue-600 hover:underline"
          >
            hari.promptsolutions@gmail.com
          </a>
        </p>

        {/* Phone */}
        <p className="text-lg text-gray-700 font-medium mb-2">
          📞 Phone:{" "}
          <a href="tel:+94758954161" className="text-blue-600 hover:underline">
            +94 75-895-4161
          </a>
        </p>

        {/* Optional Pinterest Link if needed */}
        {/* 
        <div className="flex items-center justify-center mt-4 text-blue-600 hover:underline">
          <FaPinterest className="mr-2" />
          <a href="https://www.pinterest.com/PromptwithMe/" target="_blank" rel="noopener noreferrer">
            Follow on Pinterest
          </a>
        </div>
        */}

        <p className="text-gray-500 mt-6 text-sm">
          We usually reply within 24 hours.
        </p>
      </div>
    </main>
  );
};

export default Contact;
