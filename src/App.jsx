// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Capabilities from './sections/Capabilities';
import Highlights from './sections/Highlights';
import ContactFooter from './sections/ContactFooter';

// BLOG PAGES
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-inter">
      <Navbar />

      <Routes>

        {/* Landing page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Capabilities />
              <Highlights />
              <ContactFooter />
            </>
          }
        />

        {/* Blog list page */}
        <Route path="/blog" element={<BlogList />} />

        {/* Single post page */}
        <Route path="/blog/:slug" element={<BlogPost />} />

      </Routes>
    </div>
  );
}

export default App;
