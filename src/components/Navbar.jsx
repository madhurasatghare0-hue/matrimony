import { NavLink, Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X,  Heart, HeartIcon } from "lucide-react";
import { useShortlist } from "../context/ShortlistContext";
import { useInterest } from "../context/InterestContext";
import { MdGroups } from "react-icons/md";
import { useProfile } from "../context/ProfileContext";



export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const { shortlist } = useShortlist();
  const { interests } = useInterest();

  // ADD after existing context imports at the top of the component:
const { profileData } = useProfile();
const hasPhoto = profileData.photos && profileData.photos.length > 0;
const avatarInitials = `${profileData.firstName?.[0] || ""}${profileData.lastName?.[0] || ""}`.toUpperCase();

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-md shadow-sm border-b border-white/40">      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black">
          Wedding
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 text-sm font-medium text-black">
          <NavLink to="/" className="hover:text-yellow-600 transition">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-yellow-600 transition">
            About
          </NavLink>
          <NavLink to="/matches" className="hover:text-yellow-600 transition">
            Matches
          </NavLink>
        </div>

        
        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">

          <Link
          to="/shortlist"
          className="hidden md:flex items-center justify-center relative 
                    w-10 h-10  text-black rounded-full 
                    hover:text-yellow-600 transition"
        >
          <MdGroups size={30} />

          {shortlist.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {shortlist.length}
            </span>
          )}
        </Link>

        {/* Interest Icon */}
          <Link
            to="/interests"
            className="hidden md:flex items-center justify-center relative 
                      w-10 h-10 text-black rounded-full 
                      transition"
          >
            <HeartIcon size={20} className="text-black hover:text-red-400 " />

            {interests.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
                              w-4 h-4 flex items-center justify-center rounded-full">
                {interests.length}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="bg-black text-white text-sm px-4 py-2 rounded-lg bg-[#c2852a] hover:bg-[#a8701f] transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-black text-white text-sm px-4 py-2 rounded-lg bg-[#c2852a] hover:bg-[#a8701f]  transition"
          >
            Sign up
          </Link>

          <button
        onClick={() => navigate("/profile")}
        className="w-9 h-9 rounded-full overflow-hidden hover:ring-2 hover:ring-black transition flex-shrink-0"
      >
        {hasPhoto ? (
          <img
            src={profileData.photos[0]}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : avatarInitials ? (
          <div className="w-full h-full bg-[#1c1917] flex items-center justify-center">
            <span className="text-white text-xs font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {avatarInitials}
            </span>
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm">👤</div>
        )}
      </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
     {open && (
    <div className="md:hidden bg-white/70 backdrop-blur-md border-t border-white/40 shadow-sm">
     <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-black">

      <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-yellow-600 transition">
        Home
      </NavLink>

      <NavLink to="/about" onClick={() => setOpen(false)} className="hover:text-yellow-600 transition">
        About
      </NavLink>

      <NavLink to="/matches" onClick={() => setOpen(false)} className="hover:text-yellow-600 transition">
        Matches
      </NavLink>

      <NavLink to="/login" onClick={() => setOpen(false)} className="hover:text-yellow-600 transition">
        Login
      </NavLink>

      <NavLink to="/register" onClick={() => setOpen(false)} className="hover:text-yellow-600 transition">
        Sign up
      </NavLink>

      <NavLink to="/shortlist" onClick={() => setOpen(false)} className="hover:text-yellow-600 transition">
        Shortlist
      </NavLink>

      <button
        onClick={() => {
          navigate("/profile");
          setOpen(false);
        }}
        className="text-left hover:text-gray-400 transition"
      >
        Profile
      </button>

    </div>
  </div>
)}

    </nav>
  );
}

