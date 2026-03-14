import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [focused, setFocused] = useState("");
  const [preference, setPreference] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const inputClass = (name) =>
    `w-full px-3.5 py-2.5 rounded-xl text-[0.85rem] text-[#1c1917] outline-none transition-all duration-150 border-[1.5px] ${
      focused === name
        ? "border-[#c2852a] bg-[#fffdf9]"
        : "border-[#e5e0d8] bg-white"
    }`;

  return (
    <>
      

      {/* Fixed background — fills entire viewport including behind navbar */}
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

      {/* Scrollable content layer */}
      <div className="mt-20 relative z-10 min-h-screen flex items-center justify-center p-6">
        {/* Card */}
        <div className="w-full max-w-[440px] bg-white rounded-[20px] border border-[#ede8e1] shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden">

          {/* Card header */}
          <div className="bg-[#daccb8] px-8 pt-7 pb-6 text-center">
            <div className="inline-block text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#c2852a] bg-[rgba(194,133,42,0.15)] border border-[rgba(232,201,138,0.3)] px-3 py-[3px] rounded-full mb-3">
              Trusted Matrimony Platform
            </div>
            <h2
              className="text-[1.9rem] font-bold text-black tracking-tight leading-tight m-0 mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Create{" "}
              <span className="text-[#c2852a] italic">Account</span>
            </h2>
            <p className="text-[0.75rem] text-black/[0.48] m-0">
              Join thousands finding their perfect match
            </p>

            {/* Ornament */}
            <div className="flex items-center justify-center gap-2.5 mt-4">
              <div
                className="h-px w-11"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(232,201,138,0.45))",
                }}
              />
              <div className="w-[5px] h-[5px] bg-[#c2852a] rotate-45 rounded-[1px]" />
              <div
                className="h-px w-11"
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(232,201,138,0.45))",
                }}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#ede8e1]" />

          {/* Form body */}
          <div className="px-8 pt-6 pb-8 bg-[#f9f7f4]">
            <form onSubmit={handleSubmit}>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div>
                  <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className={inputClass("first")}
                    onFocus={() => setFocused("first")}
                    onBlur={() => setFocused("")}
                  />
                </div>
                <div>
                  <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className={inputClass("last")}
                    onFocus={() => setFocused("last")}
                    onBlur={() => setFocused("")}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={inputClass("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                />
              </div>

              <div className="mb-4">
                <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className={inputClass("mobile")}
                  onFocus={() => setFocused("mobile")}
                  onBlur={() => setFocused("")}
                />
              </div>

              {/* Looking For */}
              <div className="mb-4">
                <label className="block text-[0.7rem] font-bold tracking-[0.07em] uppercase text-gray-500 mb-1.5">
                  Looking For
                </label>
                <div className="flex gap-2 mt-0.5">
                  {["Bride", "Groom"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setPreference(opt)}
                      className={`flex-1 py-2.5 rounded-xl border-[1.5px] text-[0.8rem] font-semibold cursor-pointer text-center transition-all duration-150 ${
                        preference === opt
                          ? "border-[#c2852a] bg-[#fdf3e3] text-[#c2852a]"
                          : "border-[#e5e0d8] bg-white text-gray-400"
                      }`}
                    >
                      {opt === "Bride" ? "♀ Bride" : "♂ Groom"}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-1.5 rounded-xl border-none bg-[#1c1917] text-white text-[0.85rem] font-semibold tracking-wide cursor-pointer hover:opacity-80 hover:-translate-y-px transition-all duration-150"
              >
                Create Account →
              </button>

              <p className="text-center mt-4 text-[0.8rem] text-gray-400">
                Already registered?
                <span
                  className="text-[#c2852a] font-semibold cursor-pointer ml-1 hover:opacity-70 transition-opacity"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;