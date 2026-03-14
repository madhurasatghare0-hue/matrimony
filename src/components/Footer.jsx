// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-20">

//       <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

//         <div>
//           <h3 className="text-white font-semibold mb-3">
//             Wedding Matrimony
//           </h3>
//           <p className="text-sm text-gray-400">
//             Find your perfect life partner with trust and privacy.
//           </p>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-3">Company</h4>
//           <ul className="space-y-2 text-sm">
//             <li>About Us</li>
//             <li>Contact</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-3">Legal</h4>
//           <ul className="space-y-2 text-sm">
//             <li>Privacy Policy</li>
//             <li>Terms & Conditions</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-3">Follow</h4>
//           <div className="flex gap-4 text-lg">
//             <span>🌐</span>
//             <span>📘</span>
//             <span>📸</span>
//           </div>
//         </div>

//       </div>

//       <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
//         © 2026 Wedding Matrimony
//       </div>

//     </footer>
//   );
// }





import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#1c1917" }} className="text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">

        {/* Brand */}
        <div className="md:col-span-2">
          <h3
            className="text-white font-semibold text-xl mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Wedding Matrimony
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Find your perfect life partner with trust, privacy, and the blessings of tradition.
          </p>
          {/* Gold divider */}
          <div className="mt-4 w-10 h-[2px]" style={{ background: "#c2852a" }} />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/matches" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                Browse Matches
              </Link>
            </li>
            <li>
              <Link to="/shortlist" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                Shortlist
              </Link>
            </li>
            <li>
              <Link to="/interests" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                Interests
              </Link>
            </li>
            <li>
              <Link to="/kundali" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                Kundali Matching
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/login" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                Login
              </Link>
            </li>
             <li>
              <Link to="/register" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                Register 
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-[#c2852a] transition-colors">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
            Follow Us
          </h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#c2852a] transition-colors">
              <span>🌐</span> Website
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#c2852a] transition-colors">
              <span>📘</span> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#c2852a] transition-colors">
              <span>📸</span> Instagram
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="border-t text-center py-4 text-sm"
        style={{ borderColor: "#2d2926", color: "#6b6560" }}
      >
        © 2026 Wedding Matrimony
      </div>

    </footer>
  );
}