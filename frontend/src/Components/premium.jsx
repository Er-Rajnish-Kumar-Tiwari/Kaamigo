import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FaVideo,
  FaBriefcase,
  FaUserAlt,
  FaCrown,
  FaQuestion,
  FaRocket,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function FeatureBtn() {
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    alert("Subscribed with: " + email);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-orange-50 to-purple-100 font-[Inter]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r shadow-xl p-6 space-y-6 rounded-r-xl sticky top-0 h-screen">
        <h2
          className="text-2xl font-extrabold text-purple-700 tracking-wide cursor-pointer"
          onClick={() => navigate("/explore")}
        >
          📍 Kaamigo
        </h2>
        <nav className="space-y-3">
          {[
            { label: "Explore", path: "/explore", icon: <LuLayoutDashboard /> },
            { label: "Reels", path: "/explore/reels", icon: <FaVideo /> },
            { label: "Jobs", path: "/explore/jobs", icon: <FaBriefcase /> },
            { label: "Profile", path: "/explore/profile", icon: <FaUserAlt /> },
            {
              label: "Features",
              path: "/explore/features",
              icon: <FaRocket />,
            },
            {
              label: "How it Works",
              path: "/explore/how-it-works",
              icon: <FaQuestion />,
            },
            {
              label: "Premium",
              path: "/explore/featurebtn",
              icon: <FaCrown />,
            },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-purple-100 hover:text-purple-800"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 space-y-10 w-full">
        {/* Hero Section */}
        <section className="bg-gradient-to-t from-orange-200 to-purple-200 text-center py-12 px-4 rounded-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Unlock Your Full Potential with{" "}
            <span className="text-purple-700">Kaamigo Pro</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-sm sm:text-base">
            Experience the best of Kaamigo with advanced features, unlimited
            possibilities, and dedicated support for your growing business.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 text-sm sm:text-base">
            Upgrade to Kaamigo Pro
          </button>
        </section>

        {/* Pricing Plans */}
        <section className="py-8 px-2 sm:px-4">
          <h2 className="text-2xl font-bold text-center mb-10">
            Choose Your Perfect Plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div
              className={`bg-white border p-6 rounded-lg shadow ${
                selectedPlan === "free" ? "border-purple-500 bg-purple-50" : ""
              }`}
            >
              <h3 className="text-xl font-bold mb-2">Free Plan</h3>
              <p className="text-2xl font-bold mb-4">
                $0 <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                {[
                  "Up to 5 Projects",
                  "Basic Analytics",
                  "Custom Support",
                  "Priority Support",
                  "Advanced Collaboration",
                  "Custom Integrations",
                  "Dedicated Account Manager",
                ].map((item, idx) => (
                  <li key={idx}>✔ {item}</li>
                ))}
              </ul>
              <button
                className="w-full border border-purple-500 text-purple-500 py-2 rounded hover:bg-purple-100"
                onClick={() => setSelectedPlan("free")}
              >
                Start for Free
              </button>
            </div>

            {/* Pro Plan */}
            <div
              className={`bg-white border-2 p-6 rounded-lg shadow relative ${
                selectedPlan === "pro" ? "border-purple-500" : "border-gray-300"
              }`}
            >
              <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-2 py-1 rounded-bl">
                Recommended
              </span>
              <h3 className="text-xl font-bold mb-2">Kaamigo Pro</h3>
              <p className="text-2xl font-bold mb-4">
                $19 <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                {[
                  "Unlimited Projects",
                  "Advanced Analytics",
                  "Advanced Collaboration",
                  "Custom Integrations",
                  "Dedicated Account Manager",
                ].map((item, idx) => (
                  <li key={idx}>✔ {item}</li>
                ))}
              </ul>
              <button
                className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
                onClick={() => setShowModal(true)}
              >
                Upgrade to Pro
              </button>
            </div>
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
            <div className="bg-white p-6 rounded shadow max-w-sm w-full text-center">
              <h3 className="font-bold text-lg mb-2">
                Upgrade to Kaamigo Pro?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Confirm your subscription to unlock all Pro features.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="px-4 py-2 bg-purple-600 text-white rounded"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedPlan("pro");
                    alert("Subscribed to Pro!");
                  }}
                >
                  Confirm
                </button>
                <button
                  className="px-4 py-2 border rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <section className="py-8 px-2 sm:px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Detailed Feature Comparison
          </h2>
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full table-auto border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-center">Free Plan</th>
                  <th className="p-3 text-center">Kaamigo Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Project Limit",
                  "Storage",
                  "Team Members",
                  "Basic Analytics",
                  "Advanced Analytics",
                  "Priority Email Support",
                  "Phone Support",
                  "Custom Branding",
                  "Advanced Collaboration Tools",
                  "Version History",
                  "API Access",
                  "Dedicated Account Manager",
                  "SLA (Service Level Agreements)",
                ].map((feature, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-3">{feature}</td>
                    <td className="p-3 text-center">{idx < 3 ? "✔" : "❌"}</td>
                    <td className="p-3 text-center">✔</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Testimonials */}
        <div className="mb-12 border border-gray-200 p-6 rounded-lg shadow bg-gradient-to-l from-blue-100 to-pink-100">
          <h4 className="text-3xl text-purple-600 mt-4 mb-4 font-bold text-center">
            What Our Users Say
          </h4>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2">
            {[
              {
                quote:
                  "Kaamigo transformed how I find local talent. The map feature is a game-changer!",
                name: "Sarah M.",
                role: "Small Business Owner",
              },
              {
                quote:
                  "Showcasing my work through video reels has brought me so many new clients. Truly innovative!",
                name: "Mark J.",
                role: "Freelance Videographer",
              },
              {
                quote:
                  "Finding trusted professionals has never been easier. Thanks to the reviews and profiles.",
                name: "Emily R.",
                role: "Homeowner",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="min-w-[280px] snap-center bg-white p-6 rounded shadow text-sm text-gray-700 flex-shrink-0"
              >
                <p className="mb-2 italic">“{item.quote}”</p>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Footer */}
        <footer className="py-8 bg-gradient-to-l from-purple-300 to-violet-200 text-center shadow-inner px-4">
          <h3 className="font-bold text-lg mb-2">Kaamigo</h3>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated with Kaamigo
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 border rounded sm:rounded-l-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-purple-500 text-white px-4 py-2 rounded sm:rounded-r-lg hover:bg-purple-600"
            >
              Subscribe
            </button>
          </div>
        </footer>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-orange-600 text-white px-3 py-2 rounded-full shadow hover:bg-gradient-to-r from-orange-400 to-yellow-500 transition duration-300"
        >
          Go Back
        </button>

        {/* Footer */}
        <footer className="bg-[#181B23] py-6 px-6 text-gray-300 text-center md:text-left animate-fade-in rounded-t-xl">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding */}
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                Kaamigo
              </div>
              <p className="text-sm text-gray-400">
                Connecting talent with opportunities through voice-first
                innovation.
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col gap-2 text-sm md:items-center">
              <span className="font-semibold text-purple-300 mb-2 text-xl">
                Quick Links
              </span>
              <a
                onClick={() => navigate("/explore")}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                Explore
              </a>
              <a
                onClick={() => navigate("/contact")}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                Contact
              </a>
              <a
                onClick={() => navigate("/blog")}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                Blogs
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col md:items-end gap-2 ">
              <span className="font-semibold text-purple-300 mb-2 text-xl">
                Connect with us
              </span>
              <div className="flex gap-4 justify-center md:justify-end text-2xl text-center items-center mr-5">
                <a
                  href="#"
                  className="hover:text-purple-400 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-red-500" />
                </a>
                <a
                  href="#"
                  className="hover:text-purple-400 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-blue-500" />
                </a>
                <a
                  href="#"
                  className="hover:text-purple-400 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-blue-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-8 text-xs text-gray-500 border-t border-gray-700 pt-4">
            © 2025{" "}
            <span className="text-purple-400 font-semibold">Kaamigo</span>. All
            rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
