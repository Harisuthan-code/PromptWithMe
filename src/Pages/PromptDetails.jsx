// src/pages/PromptDetails.jsx

import { useState } from "react";
import promptPacks from "../promptpack";

const categories = Object.keys(promptPacks);

const PromptDetails = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <main className="bg-white text-gray-800 px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Prompt Packs by Category
      </h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`py-2 px-5 rounded-full font-semibold transition
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Prompt Packs List */}
      <div className="grid gap-8 md:grid-cols-2">
        {promptPacks[activeCategory].map(({ id, title, description }) => (
          <div
            key={id}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <button
              disabled
              className="bg-gray-400 text-white cursor-not-allowed py-2 px-4 rounded-lg"
            >
              Coming Soon
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PromptDetails;
