import { useState } from "react";
import promptPacks from "../promptpack";

const categories = Object.keys(promptPacks);

const PromptDetails = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showCategories, setShowCategories] = useState(false);

  const pack = promptPacks[activeCategory][0];
  const isFree = pack?.price === "Free" && pack?.freeDownload;

  const freeDownloadLink = "https://drive.google.com/uc?export=download&id=1O9gAt8aar40naqzqn4FUuVWykByciIoi";

  return (
    <main className="bg-white text-gray-800 px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Prompt Packs by Category
      </h1>

      {/* Mobile Toggle */}
      <div className="sm:hidden mb-6 text-center">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          {showCategories ? "Hide Categories" : "Show Categories"}
        </button>
      </div>

      {/* Category Tabs */}
      <div
        className={`flex flex-wrap justify-center gap-4 mb-10 ${
          showCategories ? "block" : "hidden sm:flex"
        }`}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setShowCategories(false);
            }}
            className={`py-2 px-5 rounded-full font-semibold transition ${
              activeCategory === cat
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FREE CTA Banner */}
      {!isFree && (
        <div className="mb-10 p-4 bg-green-50 border border-green-300 rounded-lg text-center max-w-3xl mx-auto">
          <h4 className="text-green-700 font-semibold text-lg mb-2">
            🎁 Want to try before you buy?
          </h4>
          <p className="text-gray-800 mb-3 text-base leading-relaxed">
            Download our FREE Business Strategy Prompt Pack and experience how smart prompts turn AI into your personal business strategist — giving you clarity, direction, and goat-level results within minutes.
          </p>
          <a
            href={freeDownloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
          >
            Download Free Prompt Pack
          </a>
        </div>
      )}

      {/* Prompt Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">{activeCategory}</h2>

          <p className="text-gray-700 text-lg font-medium">
            {pack.categoryDescription ||
              "Explore high-impact prompts crafted to improve key parts of your business."}
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">{pack.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-4">{pack.description}</p>

            {pack.howItHelps && (
              <>
                <h4 className="font-semibold text-lg mb-1">How it helps your business</h4>
                <p className="text-gray-700 text-base leading-relaxed mb-4">{pack.howItHelps}</p>
              </>
            )}

            {pack.whyBuy && (
              <>
                <h4 className="font-semibold text-lg mb-1">Why You Need This</h4>
                <p className="text-gray-700 text-base leading-relaxed">{pack.whyBuy}</p>
              </>
            )}

            {/* How to Use */}
            <div className="mt-10">
              <h4 className="font-semibold text-lg mb-1">How to Use</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Each prompt includes [bold brackets] for your specific business info — like your product,
                audience, or goal. Just copy, customize, and paste into ChatGPT to get personalized results.
              </p>
            </div>

            {/* Why Prompts Work */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-1">Why Use These Prompts</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Asking ChatGPT the right way makes all the difference. These packs help you ask smart questions — just like top brands — so you get real results faster.
              </p>
            </div>

            {/* What You’ll Get Section */}
            {pack.whatYouGet && (
              <div className="pt-10 space-y-3">
                <h4 className="font-bold text-xl text-blue-700">🧠 What You’ll Get</h4>
                <div className="space-y-2">
                  {pack.whatYouGet
                    .trim()
                    .split("\n")
                    .map((line, idx) => {
                      const trimmed = line.trim();
                      if (!trimmed) return null;

                      // Section Headings
if (/^[🔹⭐👉🎯🧠🤝💡🚀]/u.test(trimmed)) {
                        return (
                          <h5
                            key={idx}
                            className="font-semibold text-blue-700 text-lg mt-5"
                          >
                            {trimmed}
                          </h5>
                        );
                      }

                      // Bullet Points
                      if (trimmed.startsWith("-")) {
                        return (
                          <li
                            key={idx}
                            className="ml-6 list-disc text-gray-800 text-base leading-relaxed"
                          >
                            {trimmed.replace(/^-/, "").trim()}
                          </li>
                        );
                      }

                      // Normal Paragraphs
                      return (
                        <p key={idx} className="text-gray-700 text-base leading-relaxed">
                          {trimmed}
                        </p>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <img
            src={pack.imagelink ? pack.imagelink.replace("../public", "") : `/images/${activeCategory.replace(/\s+/g, "_").toLowerCase()}.jpg`}
            alt={activeCategory}
            className="w-full max-w-sm rounded-lg shadow-md mb-6 object-cover"
          />

          <div className="text-right">
            <p className="text-2xl font-bold text-gray-800 mb-3">
              {isFree ? "Free Download" : `Price: ${pack.price || "Coming Soon"}`}
            </p>

            {isFree ? (
              <a
                href={freeDownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition"
              >
                Download Now
              </a>
            ) : (
              <button
                disabled={!pack.price || pack.price === "Coming Soon"}
                className={`py-2 px-6 rounded-lg text-white transition ${
                  pack.price
                    ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {pack.price ? "Buy Now" : "Coming Soon"}
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PromptDetails;
