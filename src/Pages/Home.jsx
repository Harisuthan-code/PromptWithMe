import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
    <section className="min-h-[100vh] flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
           Power Your Business Growth with AI Prompts
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Running a business without AI today is like racing without shoes. But using AI isn’t enough — you need the right prompts to win. That’s where we come in
        </p>
        <Link
          to="/prompts"
          className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-blue-100 transition"
        >
          Browse Prompt Packs
        </Link>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose Our Prompts?</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">💼 Made for Business Work</h3>
            <p>Use our prompts and get better results — they really work to grow your business</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">⚡ Save Your Time</h3>
            <p>No more wasting hours thinking what to write. Just use a prompt, edit a little, and you’re done in minutes</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📈 Easy to Use</h3>
            <p>You don’t need to know tech. Just copy the prompt into ChatGPT or any AI tool — and it works</p>
          </div>
        </div>
      </section>

      {/* Prompt Preview Section */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Popular Prompt Packs</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Example prompt pack cards */}
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">1 Ultimate Marketing Plan</h3>
              <p className="mb-4 text-gray-600">
                Boost your marketing strategy and grow your business all year with clear, step-by-step AI prompts
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">2. Brand Growth</h3>
              <p className="mb-4 text-gray-600">
                AI prompts help you create authentic content that builds your brand, connects with your audience, and grows trust — all without wasting time
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">3 Sales growth</h3>
              <p className="mb-4 text-gray-600">
               AI prompts guide you step-by-step to create sales messages that attract customers and boost your sales over time. They help you craft offers, emails, and pitches that work—so you see real growth without guesswork or stress
              </p>
            </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/prompts"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition"
          >
            See All Prompt Packs
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">
        Get AI guidance that helps your business grow faster by showing you what to do and what to avoid
        </p>
        <Link
          to="/prompts"
          className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition"
        >
          Buy Your First Prompt Pack
        </Link>
      </section>
    </main>
  );
};

export default Home;
