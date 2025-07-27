import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroNavbar from "./components/HeroNavbar";
import UserCard from "./components/UserCard";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer"; // 🔹 Import Footer here

export default function App() {
  return (
    <Router>
      <HeroNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start">
              {/* Signup Section */}
              <div className="w-full flex flex-col items-center px-4 py-10">
                <SignUpForm />
              </div>

              {/* User Card Section */}
              <div className="w-full bg-gray-50 py-10 flex justify-center px-4">
                <UserCard />
              </div>

              {/* Footer Section */}
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
