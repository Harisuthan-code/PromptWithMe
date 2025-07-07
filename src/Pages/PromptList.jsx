// src/pages/PromptList.jsx

import promptPacks from "../promptpack";

const PromptList = () => {
  return (
    <main className="bg-white text-gray-800 px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">All Prompt Packs</h1>

      {Object.entries(promptPacks).map(([category, packs]) => (
        <section key={category} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-300 pb-2">
            {category}
          </h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {packs.map(({ id, title, description }) => (
              <div
                key={id}
                className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600 mb-6">{description}</p>
                </div>

                <button
                  disabled
                  className="bg-gray-400 text-white cursor-not-allowed py-2 px-4 rounded-lg mt-auto"
                >
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default PromptList;
