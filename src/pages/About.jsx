import { CheckCircle, Sparkles, Shield, Heart, Users, Star } from "lucide-react";

export default function About() {
  return (
    <>
      

      <div className="min-h-screen mt-12">

        {/* ── HERO ── */}
        <section className="bg-white border-b border-[#ede8e1] px-6 pt-16 pb-14 text-center">
          <span className="inline-block text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#c2852a] bg-[#fdf3e3] border border-[#e8c98a] px-3.5 py-1 rounded-full mb-5">
            Trusted Matrimony Platform
          </span>
          <h1
            className="text-[clamp(2.4rem,5vw,3.4rem)] font-bold text-[#1c1917] tracking-[-0.025em] leading-tight m-0 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            About <span className="text-[#c2852a] italic">Us</span>
          </h1>
          <p className="text-gray-500 text-[0.95rem] leading-[1.7] max-w-[480px] mx-auto">
            A platform built on trust, values, and the belief that every person
            deserves a meaningful, lasting partnership.
          </p>

          {/* Ornament */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div
              className="h-px w-16"
              style={{ background: "linear-gradient(to right, transparent, #e8c98a)" }}
            />
            <div className="w-1.5 h-1.5 bg-[#c2852a] rotate-45 rounded-[1px]" />
            <div
              className="h-px w-16"
              style={{ background: "linear-gradient(to left, transparent, #e8c98a)" }}
            />
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <div className="bg-white border-t border-b border-[#ede8e1]">
          <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-2 sm:grid-cols-4">
            {[
              { num: "2M+",   lbl: "Registered Members" },
              { num: "500K+", lbl: "Successful Matches"  },
              { num: "98%",   lbl: "Satisfaction Rate"   },
              { num: "15+",   lbl: "Years of Trust"      },
            ].map(({ num, lbl }, i, arr) => (
              <div
                key={lbl}
                className={`py-8 px-4 text-center border-[#f0ede9] sm:border-r sm:last:border-r-0 border-b sm:border-b-0 last:border-b-0`}
              >
                <div
                  className="text-[2.1rem] font-bold text-[#c2852a] leading-none mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {num}
                </div>
                <div className="text-[0.73rem] text-gray-400 tracking-wide">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHO WE ARE / MISSION ── */}
        <section className="max-w-[1140px] mx-auto px-6 pt-18 pb-10" style={{ paddingTop: "4.5rem", paddingBottom: "2.5rem" }}>
          <div className="text-center mb-12">
            <span className="block text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#c2852a] mb-2">
              Our Story
            </span>
            <h2
              className="text-[clamp(1.7rem,3vw,2.2rem)] font-bold text-[#1c1917] tracking-tight leading-tight m-0 mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Built with purpose, driven by trust
            </h2>
            <p className="text-gray-500 text-[0.85rem] leading-[1.7] max-w-[460px] mx-auto m-0">
              Everything we do is in service of helping people find their forever partner in a safe, respectful, and joyful way.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {[
              {
                icon: <Users size={18} className="text-[#c2852a]" />,
                title: "Who We Are",
                body: "Wedding Matrimony is a simple and user-friendly platform created to help individuals find meaningful and trustworthy relationships. Our goal is to provide a safe and comfortable experience for users who are looking for their life partner.",
              },
              {
                icon: <Star size={18} className="text-[#c2852a]" />,
                title: "Our Mission",
                body: "Our mission is to make the partner-search journey easy, transparent, and secure. We focus on providing a clean experience where users can create profiles, explore suitable matches, and connect with confidence.",
              },
              {
                icon: <Heart size={18} className="text-[#c2852a]" />,
                title: "Our Values",
                body: "Respect, authenticity, and privacy are at the heart of everything we build. We believe every individual deserves dignity in their search for a partner — and we protect that always.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white border border-[#ede8e1] rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.045)] p-9 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.09)] transition-all duration-200"
              >
                <div className="w-[42px] h-[42px] rounded-xl bg-[#fdf3e3] border border-[#e8c98a] flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h2
                  className="text-[1.4rem] font-bold text-[#1c1917] tracking-tight m-0 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {title}
                </h2>
                <p className="text-gray-500 text-[0.855rem] leading-[1.75] m-0">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="h-px bg-[#f0ede9] max-w-[1140px] mx-auto" />

        {/* ── WHY CHOOSE US ── */}
        <section className="max-w-[1140px] mx-auto px-6" style={{ paddingTop: "3.5rem", paddingBottom: "4.5rem" }}>
          <div className="text-center mb-12">
            <span className="block text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#c2852a] mb-2">
              Our Advantages
            </span>
            <h2
              className="text-[clamp(1.7rem,3vw,2.2rem)] font-bold text-[#1c1917] tracking-tight leading-tight m-0 mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Why Choose Us
            </h2>
            <p className="text-gray-500 text-[0.85rem] leading-[1.7] max-w-[460px] mx-auto m-0">
              We've spent years refining an experience that puts your wellbeing and success first.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
            {[
              {
                iconBg: "bg-green-50 border-green-200",
                icon: <CheckCircle size={22} className="text-green-600" />,
                title: "Verified Profiles",
                body: "We focus on genuine and trustworthy user profiles — so every connection you make is real.",
              },
              {
                iconBg: "bg-[#fdf3e3] border-[#e8c98a]",
                icon: <Sparkles size={22} className="text-[#c2852a]" />,
                title: "Smart Matching",
                body: "Find matches based on your preferences, values, and compatibility — not just photos.",
              },
              {
                iconBg: "bg-blue-50 border-blue-200",
                icon: <Shield size={22} className="text-blue-500" />,
                title: "Safe & Secure",
                body: "Your data and privacy are always our priority. We never share your information without consent.",
              },
            ].map(({ iconBg, icon, title, body }) => (
              <div
                key={title}
                className="bg-white border border-[#ede8e1] rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.045)] p-7 text-center group hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.09)] transition-all duration-200"
              >
                <div
                  className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mx-auto mb-5 border ${iconBg} group-hover:bg-[#c2852a] group-hover:border-[#c2852a] transition-colors duration-200`}
                >
                  <span className="group-hover:[&_svg]:text-white transition-colors duration-200">
                    {icon}
                  </span>
                </div>
                <h3
                  className="text-[1.2rem] font-bold text-[#1c1917] tracking-tight m-0 mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-[0.82rem] leading-[1.7] m-0">{body}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}