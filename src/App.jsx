
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PromptList from "./Pages/PromptList";
import PromptDetails from "./Pages/PromptDetails";
import ThankYou from "./Pages/ThankYou";
import NavBar from "./Comp/Navbar";
import Footer from "./Comp/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Main content grows to fill available space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prompts" element={<PromptList />} />
          <Route path="/prompt-details" element={<PromptDetails />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <main className="flex justify-center items-center min-h-screen text-2xl">
                404: Page Not Found
              </main>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
