// src/pages/About.jsx

const About = () => {
  return (
    <main className="bg-white text-gray-800 px-6 py-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We help business owners, creators, and marketers unlock the power of AI with ready-to-use prompt packs that save time, simplify marketing, and drive real growth.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image (optional, replace if needed) */}
        <div>
          <img
            src="../public/images/Portfolioimage.jpg"
            alt="About Prompt Business"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why We Started This</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Like many solo founders and marketers, I struggled to create daily content, ads, and sales copy. Most of the time, I didn’t know where to start.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            So I started writing my own prompts to use with ChatGPT and realized how powerful it was. What used to take 2–3 hours now takes 15 minutes — and it actually converts.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I have worked with AI tools for over 2 years and teamed up with experienced prompt engineers. Together, we created these prompt packs to help business owners like you move faster, market smarter, and get real results.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Now I’ve packaged all of that into prompt packs to help others like you — business owners who want to move fast, market smart, and get results.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To empower 10,000+ small business owners with high-quality AI prompts that grow their business, save time, and make marketing feel effortless.
        </p>
      </section>
    </main>
  );
};

export default About;
