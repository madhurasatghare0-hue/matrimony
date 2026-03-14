import { useState } from "react";

const FAQS = [
  {
    q: "Is this matrimony platform free to use?",
    a: "Yes. You can create a profile, browse matches, and use basic features for free. Premium features unlock advanced filters and unlimited interactions."
  },
  {
    q: "How does Kundali matching work?",
    a: "We use the traditional Ashtakoot (36-point) Gun Milan system to evaluate compatibility based on moon sign, nakshatra, and doshas."
  },
  {
    q: "Is my personal information safe?",
    a: "Absolutely. Your data is encrypted and never shared without your consent. Privacy controls allow you to manage visibility at all times."
  },
  {
    q: "Can I talk to matches directly?",
    a: "Yes. Once interest is accepted, you can start chatting securely within the platform."
  },
  {
    q: "Do you verify profiles?",
    a: "We use multiple verification to reduce fake profiles."
  }
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className=" py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-[#1c1917] font-bold mb-3"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 2.6rem)",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#9a8c7a] text-sm max-w-xl mx-auto">
            Everything you need to know about finding your perfect match.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white border border-[#ece8e1] rounded-2xl overflow-hidden transition-shadow hover:shadow-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center text-left px-6 py-5"
                >
                  <span className="text-[#1c1917] font-semibold text-sm">
                    {f.q}
                  </span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: "#c2852a" }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-[#5a5048] text-sm leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}