import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import MovieListingPage from "./pages/MovieListingPage.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MovieListingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
