
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PromptDetails from "./Pages/PromptDetails";
import ThankYou from "./Pages/ThankYou";
import NavBar from "./Comp/Navbar";
import Footer from "./Comp/Footer";
import RefundPolicy from "./Pages/RefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";

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
          <Route path="/prompts" element={<PromptDetails />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />


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
