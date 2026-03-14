// import { useState } from "react";

// const ACCENT = "#c2852a";
// const DARK   = "#1c1917";
// const BORDER = "#ece8e1";
// const MUTED  = "#9a8c7a";

// const RASHIS = [
//   "Mesh (Aries)", "Vrishabh (Taurus)", "Mithun (Gemini)", "Kark (Cancer)",
//   "Simha (Leo)", "Kanya (Virgo)", "Tula (Libra)", "Vrishchik (Scorpio)",
//   "Dhanu (Sagittarius)", "Makar (Capricorn)", "Kumbh (Aquarius)", "Meen (Pisces)",
// ];

// const NAKSHATRAS = [
//   "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
//   "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
//   "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
//   "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishtha",
//   "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati",
// ];

// const GUNAS = [
//   { name: "Varna",        max: 1 },
//   { name: "Vashya",       max: 2 },
//   { name: "Tara",         max: 3 },
//   { name: "Yoni",         max: 4 },
//   { name: "Graha Maitri", max: 5 },
//   { name: "Gana",         max: 6 },
//   { name: "Rashi",        max: 7 },
//   { name: "Nadi",         max: 8 },
// ];

// const empty = { name: "", dob: "", tob: "", city: "", rashi: "", nakshatra: "", manglik: "" };

// function StyledInput({ type = "text", placeholder, value, onChange }) {
//   const [focus, setFocus] = useState(false);
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       onFocus={() => setFocus(true)}
//       onBlur={() => setFocus(false)}
//       style={{
//         width: "100%", padding: "9px 13px",
//         border: `1.5px solid ${focus ? ACCENT : BORDER}`,
//         borderRadius: 9, fontFamily: "'Inter', sans-serif",
//         fontSize: "0.83rem", color: DARK,
//         outline: "none", transition: "border-color 0.18s",
//       }}
//     />
//   );
// }

// function StyledSelect({ value, onChange, options, placeholder }) {
//   const [focus, setFocus] = useState(false);
//   return (
//     <select
//       value={value}
//       onChange={onChange}
//       onFocus={() => setFocus(true)}
//       onBlur={() => setFocus(false)}
//       style={{
//         width: "100%", padding: "9px 13px",
//         border: `1.5px solid ${focus ? ACCENT : BORDER}`,
//         borderRadius: 9, fontFamily: "'Inter', sans-serif",
//         fontSize: "0.83rem", color: value ? DARK : MUTED,
//         outline: "none", cursor: "pointer",
//         transition: "border-color 0.18s", appearance: "none",
//         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239a8c7a'/%3E%3C/svg%3E")`,
//         backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
//         paddingRight: 30,
//       }}
//     >
//       {placeholder && <option value="">{placeholder}</option>}
//       {options.map(o => <option key={o} value={o}>{o}</option>)}
//     </select>
//   );
// }

// function Field({ label, children, className = "" }) {
//   return (
//     <div className={`mb-3.5 ${className}`}>
//       <label className="block text-[0.68rem] font-bold tracking-[0.1em] uppercase text-[#9a8c7a] mb-1.5">
//         {label}
//       </label>
//       {children}
//     </div>
//   );
// }

// function PersonCard({ who, accent, data, onChange }) {
//   const set = k => e => onChange({ ...data, [k]: e.target.value });
//   return (
//     <div
//       className="bg-white rounded-2xl border border-[#ece8e1] p-6 shadow-sm"
//       style={{ borderTop: `3px solid ${accent}` }}
//     >
//       <div
//         className="flex items-center gap-2 text-lg font-bold mb-5"
//         style={{ fontFamily: "'Cormorant Garamond', serif", color: accent }}
//       >
//         {who === "Bride" ? "🌸" : "🔷"} {who}'s Details
//       </div>

//       <Field label="Full Name">
//         <StyledInput placeholder={`${who}'s full name`} value={data.name} onChange={set("name")} />
//       </Field>

//       <div className="grid grid-cols-2 gap-2.5">
//         <Field label="Date of Birth">
//           <StyledInput type="date" value={data.dob} onChange={set("dob")} />
//         </Field>
//         <Field label="Time of Birth">
//           <StyledInput type="time" value={data.tob} onChange={set("tob")} />
//         </Field>
//       </div>

//       <Field label="City of Birth">
//         <StyledInput placeholder="e.g. Pune, Mumbai" value={data.city} onChange={set("city")} />
//       </Field>

//       <Field label="Rashi (Moon Sign)">
//         <StyledSelect value={data.rashi} onChange={set("rashi")} options={RASHIS} placeholder="Select Rashi" />
//       </Field>

//       <Field label="Nakshatra">
//         <StyledSelect value={data.nakshatra} onChange={set("nakshatra")} options={NAKSHATRAS} placeholder="Select Nakshatra" />
//       </Field>

//       <Field label="Manglik Status" className="!mb-0">
//         <StyledSelect
//           value={data.manglik} onChange={set("manglik")}
//           options={["Manglik", "Non-Manglik", "Partial Manglik", "Don't Know"]}
//           placeholder="Select"
//         />
//       </Field>
//     </div>
//   );
// }

// export default function KundaliMatching() {
//   const [bride,   setBride]   = useState({ ...empty });
//   const [groom,   setGroom]   = useState({ ...empty });
//   const [result,  setResult]  = useState(null);
//   const [loading, setLoading] = useState(false);

//   const calculate = () => {
//     if (!bride.name.trim() || !groom.name.trim()) {
//       alert("Please enter names for both Bride and Groom.");
//       return;
//     }
//     setLoading(true);
//     setResult(null);
//     setTimeout(() => {
//       const scores = GUNAS.map(g => ({
//         ...g,
//         score: Math.min(g.max, Math.round(Math.random() * g.max * 0.45 + g.max * 0.55)),
//       }));
//       const total = scores.reduce((a, b) => a + b.score, 0);
//       setResult({ scores, total });
//       setLoading(false);
//       setTimeout(() => {
//         document.getElementById("k-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 100);
//     }, 1200);
//   };

//   const verdict =
//     result?.total >= 28 ? { label: "Excellent Match",     color: "#5a8a5a" } :
//     result?.total >= 18 ? { label: "Good Match",          color: ACCENT    } :
//                           { label: "Needs Consideration", color: "#b05555" };

//   return (
//     <div className="min-h-screen">

//       <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

//       {/* ── PAGE HEADER ── */}
//       <div className="bg-white border-b border-[#ece8e1] px-8 py-5 mt-10 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1
//             className="text-[2rem] font-bold text-[#1c1917] m-0 "
//             style={{ fontFamily: "'Cormorant Garamond', serif" }}
//           >
//             Kundali Matching
//           </h1>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-6 py-7 pb-20">

//         {/* ── FORM CARDS ── */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
//           <PersonCard who="Bride" accent="#b06070" data={bride} onChange={setBride} />
//           <PersonCard who="Groom" accent="#4a7aaa" data={groom} onChange={setGroom} />
//         </div>

//         {/* ── CALCULATE BUTTON ── */}
//         <div className="text-center mb-9">
//           <button
//             onClick={calculate}
//             disabled={loading}
//             className="inline-flex items-center gap-2 text-white text-sm font-semibold px-10 py-3 rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
//             style={{
//               background: loading ? "#d4b483" : ACCENT,
//               boxShadow: "0 2px 12px rgba(194,133,42,0.28)",
//             }}
//             onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "#a8701f"; }}
//             onMouseLeave={e => { if (!loading) e.currentTarget.style.background = loading ? "#d4b483" : ACCENT; }}
//           >
//             {loading ? (
//               <>
//                 <span style={{
//                   width: 14, height: 14, display: "inline-block",
//                   border: "2px solid rgba(255,255,255,0.35)",
//                   borderTopColor: "#fff", borderRadius: "50%",
//                   animation: "spin 0.7s linear infinite",
//                 }} />
//                 Calculating…
//               </>
//             ) : "♥ Calculate Match"}
//           </button>
//         </div>

//         {/* ── RESULT: SCORE ONLY ── */}
//         {result && (
//           <div id="k-result">
//             <div
//               className="bg-white rounded-2xl border border-[#ece8e1] shadow-sm p-4 text-center"
//               style={{ borderTop: `3px solid ${verdict.color}` }}
//             >
//               {/* Names */}
//               <div
//                 className="text-[1.3rem] font-bold text-[#1c1917] mb-4"
//                 style={{ fontFamily: "'Cormorant Garamond', serif" }}
//               >
//                 {bride.name} &amp; {groom.name}
//               </div>

//               {/* Score number */}
//               <div
//                 className="text-[6rem] font-bold leading-none mb-1"
//                 style={{ fontFamily: "'Cormorant Garamond', serif", color: verdict.color }}
//               >
//                 {result.total}
//               </div>
//               <div className="text-[1rem] text-[#9a8c7a] mb-5">out of 36</div>

//               {/* Verdict badge */}
//               <div
//                 className="inline-block text-[0.8rem] font-semibold px-4 py-1 rounded-full mb-6"
//                 style={{
//                   background: `${verdict.color}18`,
//                   color: verdict.color,
//                   border: `1px solid ${verdict.color}35`,
//                 }}
//               >
//                 {verdict.label}
//               </div>

//               {/* Progress bar */}
//               <div className="flex items-center gap-3 max-w-xs mx-auto">
//                 <div className="flex-1 h-[6px] bg-[#ede8e0] rounded-full overflow-hidden">
//                   <div
//                     className="h-full rounded-full transition-all duration-700"
//                     style={{ width: `${(result.total / 36) * 100}%`, background: verdict.color }}
//                   />
//                 </div>
//                 <span className="text-[0.75rem] text-[#9a8c7a] shrink-0">
//                   {Math.round((result.total / 36) * 100)}%
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }







import { useState } from "react";

const ACCENT = "#c2852a";
const DARK = "#1c1917";
const BORDER = "#ece8e1";
const MUTED = "#9a8c7a";

const RASHIS = [
  "Mesh (Aries)", "Vrishabh (Taurus)", "Mithun (Gemini)", "Kark (Cancer)",
  "Simha (Leo)", "Kanya (Virgo)", "Tula (Libra)", "Vrishchik (Scorpio)",
  "Dhanu (Sagittarius)", "Makar (Capricorn)", "Kumbh (Aquarius)", "Meen (Pisces)",
];

const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishtha",
  "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati",
];

const GUNAS = [
  { name: "Varna", max: 1 },
  { name: "Vashya", max: 2 },
  { name: "Tara", max: 3 },
  { name: "Yoni", max: 4 },
  { name: "Graha Maitri", max: 5 },
  { name: "Gana", max: 6 },
  { name: "Rashi", max: 7 },
  { name: "Nadi", max: 8 },
];

const empty = {
  name: "",
  dob: "",
  tob: "",
  city: "",
  rashi: "",
  nakshatra: "",
  manglik: "",
};

/* ---------- INPUT ---------- */

function StyledInput({ type = "text", placeholder, value, onChange }) {
  const [focus, setFocus] = useState(false);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width: "100%",
        padding: "10px 14px",
        border: `1.5px solid ${focus ? ACCENT : BORDER}`,
        borderRadius: 10,
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.9rem",
        color: DARK,
        outline: "none",
        transition: "border-color 0.2s",
        background: "#fff",
      }}
    />
  );
}

/* ---------- SELECT ---------- */

function StyledSelect({ value, onChange, options, placeholder }) {
  const [focus, setFocus] = useState(false);

  return (
    <select
      value={value}
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width: "100%",
        padding: "10px 14px",
        border: `1.5px solid ${focus ? ACCENT : BORDER}`,
        borderRadius: 10,
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.9rem",
        color: value ? DARK : MUTED,
        outline: "none",
        cursor: "pointer",
        appearance: "none",
        background: "#fff",
      }}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

/* ---------- FIELD ---------- */

function Field({ label, children }) {
  return (
    <div className="mb-4">
      <label
        className="block text-[11px] font-semibold uppercase mb-1"
        style={{ color: MUTED, letterSpacing: "1px" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/* ---------- PERSON CARD ---------- */

function PersonCard({ who, accent, data, onChange }) {
  const set = (k) => (e) => onChange({ ...data, [k]: e.target.value });

  return (
    <div
      className="rounded-2xl border p-7 shadow-md"
      style={{
        borderColor: BORDER,
        borderTop: `3px solid ${accent}`,
        background: "#ffffff",
      }}
    >
      <h3
        className="text-xl font-semibold mb-6"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: accent,
        }}
      >
        {who === "Bride" ? "🌸" : "🔷"} {who}'s Details
      </h3>

      <Field label="Full Name">
        <StyledInput
          placeholder={`${who}'s full name`}
          value={data.name}
          onChange={set("name")}
        />
      </Field>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Date of Birth">
          <StyledInput type="date" value={data.dob} onChange={set("dob")} />
        </Field>

        <Field label="Time of Birth">
          <StyledInput type="time" value={data.tob} onChange={set("tob")} />
        </Field>
      </div>

      <Field label="City of Birth">
        <StyledInput
          placeholder="Mumbai, Pune..."
          value={data.city}
          onChange={set("city")}
        />
      </Field>

      <Field label="Rashi">
        <StyledSelect
          value={data.rashi}
          onChange={set("rashi")}
          options={RASHIS}
          placeholder="Select Rashi"
        />
      </Field>

      <Field label="Nakshatra">
        <StyledSelect
          value={data.nakshatra}
          onChange={set("nakshatra")}
          options={NAKSHATRAS}
          placeholder="Select Nakshatra"
        />
      </Field>

      <Field label="Manglik Status">
        <StyledSelect
          value={data.manglik}
          onChange={set("manglik")}
          options={[
            "Manglik",
            "Non-Manglik",
            "Partial Manglik",
            "Don't Know",
          ]}
          placeholder="Select"
        />
      </Field>
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */

export default function KundaliMatching() {
  const [bride, setBride] = useState({ ...empty });
  const [groom, setGroom] = useState({ ...empty });
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!bride.name || !groom.name) {
      alert("Enter both names");
      return;
    }

    const scores = GUNAS.map((g) => ({
      ...g,
      score: Math.floor(Math.random() * g.max),
    }));

    const total = scores.reduce((a, b) => a + b.score, 0);

    setResult({ scores, total });

    setTimeout(() => {
      document.getElementById("result")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const verdict =
    result?.total >= 28
      ? { label: "Excellent Match", color: "#5a8a5a" }
      : result?.total >= 18
      ? { label: "Good Match", color: ACCENT }
      : { label: "Needs Consideration", color: "#b05555" };

  return (
    <div
      className="min-h-screen"
    >
      {/* HEADER */}

      <div className="text-center pt-20 pb-10 px-6">
        <h1
          className="text-4xl font-semibold mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: DARK,
          }}
        >
          Kundali Matching
        </h1>

        <p className="text-sm max-w-xl mx-auto" style={{ color: MUTED }}>
          Check horoscope compatibility between bride and groom using the
          traditional Ashta-Koota system.
        </p>

        <div
          className="w-20 h-[2px] mx-auto mt-5"
          style={{ background: ACCENT }}
        />
      </div>

      {/* FORM */}

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <PersonCard who="Bride" accent="#b06070" data={bride} onChange={setBride} />
          <PersonCard who="Groom" accent="#4a7aaa" data={groom} onChange={setGroom} />
        </div>

        {/* BUTTON */}

        <div className="text-center mb-12">
          <button
            onClick={calculate}
            className="text-white font-semibold px-12 py-3 rounded-full transition-all"
            style={{
              background: ACCENT,
              boxShadow: "0 4px 18px rgba(194,133,42,0.35)",
            }}
          >
            ♥ Calculate Match
          </button>
        </div>


       {/* RESULT */}

        {result && (
          <div id="result">
            <div
              className="rounded-3xl text-center max-w-lg mx-auto overflow-hidden"
              style={{
                background: "#ffffff",
                border: `1px solid ${BORDER}`,
                boxShadow: "0 8px 40px rgba(194,133,42,0.12)",
              }}
            >
              {/* Top gradient bar */}
              <div style={{ height: 3, background: "linear-gradient(90deg, #b06070, #c2852a, #4a7aaa)" }} />

              <div className="px-10 py-10">
                {/* Celestial decoration */}
                <div className="mb-3" style={{ color: ACCENT, fontSize: 18, letterSpacing: 8, opacity: 0.7 }}>
                  ☽ ✦ ☾
                </div>

                {/* Names */}
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: DARK,
                  }}
                >
                  {bride.name} & {groom.name}
                </h3>

                <p className="text-[11px] uppercase tracking-widest mb-8" style={{ color: MUTED }}>
                  Ashta-Koota Milan
                </p>

                {/* Thin gold divider */}
                <div className="mx-auto mb-8" style={{ width: 36, height: 1, background: ACCENT, opacity: 0.5 }} />

                {/* Score */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "6rem",
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: "-3px",
                    color: verdict.color,
                  }}
                >
                  {result.total}
                </div>

                <p className="text-sm mt-1 mb-6" style={{ color: MUTED, letterSpacing: "0.04em" }}>
                  out of 36
                </p>

                {/* Progress bar */}
                <div
                  className="rounded-full overflow-hidden mx-auto mb-6"
                  style={{ height: 5, background: "#ede8e0", maxWidth: 220 }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(result.total / 36) * 100}%`,
                      background: `linear-gradient(90deg, ${verdict.color}99, ${verdict.color})`,
                      transition: "width 0.8s ease",
                    }}
                  />
                </div>

                {/* Verdict badge */}
                <div
                  className="inline-block rounded-full text-xs font-semibold uppercase tracking-widest px-5 py-2"
                  style={{
                    background: `${verdict.color}15`,
                    color: verdict.color,
                    border: `1px solid ${verdict.color}30`,
                  }}
                >
                  {verdict.label}
                </div>

                {/* Bottom hint */}
                {result.total < 18 && (
                  <p className="mt-5 text-[11px]" style={{ color: "#b8ad9e" }}>
                    Score below 18 · Consult a Jyotishi for guidance
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}