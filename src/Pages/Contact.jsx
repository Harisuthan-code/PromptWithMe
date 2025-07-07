// src/pages/Contact.jsx

import { FaPinterest } from "react-icons/fa"; // Install react-icons if not already

const Contact = () => {
  return (
    <main className="bg-white text-gray-800 px-6 py-20 flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Whether it's a collab, custom prompt request, or a question — I'm here to help.
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

        {/* Pinterest */}
        <p className="text-lg text-gray-700 font-medium flex justify-center items-center gap-2 mb-4">
          <FaPinterest className="text-red-600 text-xl" />
          <a
            href="https://www.pinterest.com/PromptwithMe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit our Pinterest
          </a>
        </p>

        <p className="text-gray-500 mt-6 text-sm">
                    We usually reply within 24 hours.
        </p>
      </div>
    </main>
  );
};

export default Contact;
