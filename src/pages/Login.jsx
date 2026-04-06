import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/";
  const [userType, setUserType] = useState("free");
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState({
      userName: "",
      password: "",
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userType", userType);
    navigate(redirectTo, { replace: true });
  };

  const inputClass = (name) =>
    `w-full px-3.5 py-2.5 rounded-xl text-[0.85rem] text-[#1c1917] outline-none transition-all duration-150 border-[1.5px] ${
      focused === name
        ? "border-[#c2852a] bg-[#fffdf9]"
        : "border-[#e5e0d8] bg-white"
    }`;

  return (
    <>
      

      {/* Page — fixed background so it fills everything behind navbar too */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://imgs.search.brave.com/vLSQbXzsQDHKlZrbNiK9Br-QT69MoTtDh6yk8gMOJC0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGluYW5kamlyc2Eu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8w/MDA3LU1OLVBlbGlj/YW4tSGlsbC1TYW5n/ZWV0LVdlZGRpbmct/UGhvdG9zLmpwZw')",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,25,23,0.72) 0%, rgba(60,35,10,0.55) 100%)",
          }}
        />
      </div>

      {/* Scrollable content layer on top */}
      <div className="mt-20 relative z-10 min-h-screen flex items-center justify-center p-10">
        {/* Card */}
        <div className="w-full max-w-[420px] bg-white rounded-[20px] border border-[#ede8e1] shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden">

          {/* Card header */}
          <div className="bg-[#daccb8] px-8 pt-8 pb-7 text-center">
            <div className="inline-block text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#c2852a] bg-[rgba(194,133,42,0.15)] border border-[rgba(232,201,138,0.3)] px-3 py-[3px] rounded-full mb-3">
              Trusted Matrimony Platform
            </div>
            <h2
              className="text-[2rem] font-bold text-black tracking-tight leading-tight m-0 mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Welcome <span className="text-[#c2852a] italic">Back</span>
            </h2>
            <p className="text-[0.78rem] text-black/50 m-0">
              Login to find your perfect match
            </p>

            {/* Ornament */}
            <div className="flex items-center justify-center gap-2.5 mt-5">
              <div
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(232,201,138,0.5))",
                }}
              />
              <div className="w-[5px] h-[5px] bg-[#c2852a] rotate-45 rounded-[1px]" />
              <div
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(232,201,138,0.5))",
                }}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#ede8e1]" />

          {/* Form body */}
          <div className="px-8 pt-7 pb-8 bg-[#f9f7f4]">
            <form onSubmit={handleSubmit}>

              {/* <div className="mb-[1.1rem]">
                <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className={inputClass("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                />
              </div>

              <div className="mb-[1.1rem]">
                <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className={inputClass("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                />
              </div>

              <div className="mb-[1.1rem]">
                <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter mobile number"
                  className={inputClass("mobile")}
                  onFocus={() => setFocused("mobile")}
                  onBlur={() => setFocused("")}
                />
              </div> */}

               <div className="mb-4">
                <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"                 
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Enter your User name"
                  className={inputClass("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                />
              </div>

              <div className="mb-4">
                <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  name="password"                 
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={inputClass("password")}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused("")}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-2 rounded-xl border-none bg-[#1c1917] text-white text-[0.85rem] font-semibold tracking-wide cursor-pointer hover:opacity-80 hover:-translate-y-px transition-all duration-150"
              >
                Login →
              </button>

              <p className="text-center mt-4 text-[0.8rem] text-gray-400">
                Don't have an account?
                <span
                  className="text-[#c2852a] font-semibold cursor-pointer ml-1 hover:opacity-75 transition-opacity"
                  onClick={() => navigate("/register")}
                >
                  Register
                </span>
              </p>

            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;