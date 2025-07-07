// src/pages/ThankYou.jsx

import { Link } from "react-router-dom";

const ThankYou = () => {
  // For now, the download button links to "#", update when you have files to share
  return (
    <main className="bg-white min-h-screen flex flex-col justify-center items-center px-6 py-20 text-gray-800">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl font-bold mb-6 text-green-600">Thank You!</h1>
        <p className="text-lg mb-8">
          We appreciate:
        </p>
        <ul className="list-disc list-inside mb-8 text-left text-gray-700 space-y-2 max-w-md mx-auto">
          <li>Your trust in our AI prompt packs.</li>
          <li>Supporting a small and growing business.</li>
          <li>Taking a step to save time and boost your marketing.</li>
        </ul>

        <button
          onClick={() => alert("Download functionality coming soon!")}
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition mb-6"
        >
          Download Your Prompt Pack
        </button>

        <p className="text-gray-500 text-sm">
          If you have questions, feel free to{" "}
          <Link to="/contact" className="text-blue-600 hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default ThankYou;
