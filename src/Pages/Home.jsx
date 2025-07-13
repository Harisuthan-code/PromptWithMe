import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
   <section className="min-h-[100vh] flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight sm:leading-snug">
    Power Your Business Growth <br className="block sm:hidden" /> with AI Prompts
  </h1>
  <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl mb-6">
    Running a business without AI today is like racing without shoes. But using AI isn’t enough — you need the right prompts to win. That’s where we come in.
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

      </section>

      {/* Final CTA */}
<section className="w-full px-6 py-12 font-sans leading-relaxed bg-gray-50 rounded-lg shadow-sm">
  <h2 className="text-2xl md:text-3xl text-gray-900 mb-6 font-bold text-center tracking-tight">
    What Are AI Prompts & Why They Matter
  </h2>

  <p className="mb-8 text-gray-800 text-base md:text-lg max-w-4xl mx-auto">
    AI prompts are simple instructions you give AI tools like ChatGPT to get useful answers, ideas, and content quickly. They act like <em className="italic font-semibold text-indigo-600">magic keys</em> unlocking AI’s full potential for your business.
  </p>

  <h3 className="text-xl md:text-2xl text-gray-900 mb-5 font-semibold text-center">
    Why AI Prompts Help Your Business
  </h3>

  <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base max-w-4xl mx-auto mb-10">
    <li>
      <strong className="font-semibold">Save Time:</strong> Write emails, ads, or posts in seconds with the right prompts.
    </li>
    <li>
      <strong className="font-semibold">Boost Creativity:</strong> Get fresh marketing ideas and catchy content.
    </li>
    <li>
      <strong className="font-semibold">Cut Costs:</strong> No need to hire writers or marketers for every task.
    </li>
    <li>
      <strong className="font-semibold">Stay Competitive:</strong> Use AI to keep your business innovative and agile.
    </li>
  </ul>

  <p className="text-gray-800 text-base md:text-lg font-medium text-center max-w-4xl mx-auto">
    AI prompts help you work smarter and grow faster — no tech skills required. Start using them today and see the difference.
  </p>
</section>




    </main>
  );
};

export default Home;
