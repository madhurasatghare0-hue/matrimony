import { useState } from "react";
import { Edit2, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { useProfile } from "../context/ProfileContext";
import CompleteProfile from "./CompleteProfile";

const AVATAR_BG = ["#d4cfc9", "#b8b0a6"];

function v(val, fallback = "—") {
  return val && String(val).trim() !== "" ? val : fallback;
}

function initials(first = "", last = "") {
  return `${first[0] || ""}${last[0] || ""}`.toUpperCase() || "?";
}

function CardTitle({ children }) {
  return (
    <h2 className="flex items-center gap-2.5 text-[1.2rem] font-bold text-[#1c1917] tracking-tight mb-4"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <span className="w-[3px] h-5 rounded-sm bg-[#c2852a] flex-shrink-0" />
      {children}
    </h2>
  );
}

function InfoGrid({ items }) {
  const filtered = items.filter(({ value }) => value && String(value).trim() !== "");
  if (!filtered.length) return null;
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
      {filtered.map(({ label, value }) => (
        <div key={label}>
          <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-0.5">{label}</p>
          <p className="text-[0.85rem] font-semibold text-[#1c1917]">{value}</p>
        </div>
      ))}
    </div>
  );
}

export default function Profile() {
  const { profileData: p } = useProfile();
  const [showEdit, setShowEdit] = useState(false);

  const fullName  = [p.firstName, p.lastName].filter(Boolean).join(" ") || "Your Name";
  const avatarStr = initials(p.firstName, p.lastName);
  const city      = [p.currentCity, p.currentState, p.country].filter(Boolean).join(", ") || "";

  const age = p.dob
    ? Math.floor((new Date() - new Date(p.dob)) / (365.25 * 24 * 60 * 60 * 1000))
    : null;

  return (
    <>
      {/* Edit Profile Modal */}
      {showEdit && <CompleteProfile onClose={() => setShowEdit(false)} />}

      <div className="min-h-screen px-6 pt-10 pb-16 mt-12">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-5">

          {/* ── HERO CARD ── */}
          <div className="bg-white border border-white rounded-[20px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
            <div className="bg-black px-8 py-8 flex items-center gap-8 flex-wrap">

              {/* Avatar / Photo */}
              <div className="relative flex-shrink-0">
                {p.photos && p.photos.length > 0 ? (
                  <img src={p.photos[0]} alt={fullName}
                    className="w-[110px] h-[110px] rounded-2xl object-cover border-2 border-[rgba(243,215,159,0.3)]" />
                ) : (
                  <div className="w-[110px] h-[110px] rounded-2xl flex items-center justify-center border-2 border-[rgba(243,215,159,0.3)]"
                    style={{ background: `linear-gradient(145deg, ${AVATAR_BG[0]}, ${AVATAR_BG[1]})` }}>
                    <span className="text-[2.8rem] font-bold tracking-[3px]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.85)" }}>
                      {avatarStr}
                    </span>
                  </div>
                )}
              </div>

              {/* Name + meta */}
              <div className="flex-1 min-w-[200px]">
                <span className="block text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#c2852a] mb-1.5">My Profile</span>
                <h1 className="text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-white tracking-tight leading-tight m-0 mb-1.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {fullName}
                </h1>
                <div className="flex items-center gap-2 text-white/[0.52] text-[0.95rem] flex-wrap">
                  {age && <span>{age} yrs</span>}
                  {age && p.height && <span className="text-white/25">·</span>}
                  {p.height && <span>{p.height}</span>}
                  {p.weight && <><span className="text-white/25">·</span><span>{p.weight}</span></>}
                  {city && <><span className="text-white/25">·</span><MapPin size={11} /><span>{city}</span></>}
                </div>
                {p.occupation && (
                  <p className="text-[0.8rem] text-white/40 mt-1">{p.occupation}{p.company ? ` at ${p.company}` : ""}</p>
                )}
              </div>

              {/* Edit button — opens modal */}
              <button
                onClick={() => setShowEdit(true)}
                className="flex items-center gap-1.5 px-5 py-2.5 bg-[#fdf3e3] border-[1.5px] border-[#e8c98a] text-[#c2852a] rounded-xl text-[0.8rem] font-semibold cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap self-start">
                <Edit2 size={13} /> Edit Profile
              </button>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 border-t border-[#f0ede9]">
              {[
                { label: "Religion",       value: v(p.religion) },
                { label: "Community",      value: v(p.caste) },
                { label: "Marital Status", value: v(p.maritalStatus) },
              ].map(({ label, value }, i) => (
                <div key={label} className={`px-6 py-4 ${i < 2 ? "border-r border-[#f0ede9]" : ""}`}>
                  <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-1">{label}</p>
                  <p className="text-[0.88rem] font-semibold text-black">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── BODY GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 items-start">

            {/* ── MAIN COLUMN ── */}
            <div className="flex flex-col gap-5 order-1">

              {/* About */}
              <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                <CardTitle>About Myself</CardTitle>
                <p className="text-gray-500 text-[0.87rem] leading-[1.75] m-0">
                  {v(p.about, "No bio added yet. Click Edit Profile to add one.")}
                </p>
              </div>

              {/* Astrological Details */}
              {(p.rashi || p.nakshatra || p.gotra || p.birthCity || p.birthTime) && (
                <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                  <CardTitle>Astrological Details</CardTitle>
                  <InfoGrid items={[
                    { label: "Rashi (Moon Sign)", value: p.rashi },
                    { label: "Nakshatra",         value: p.nakshatra },
                    { label: "Gotra",             value: p.gotra },
                    { label: "Manglik Status",    value: p.manglik },
                    { label: "Birth City",        value: p.birthCity },
                    { label: "Time of Birth",     value: p.birthTime },
                  ]} />
                </div>
              )}

              {/* Religion & Community */}
              {(p.religion || p.caste || p.subCaste || p.community || p.religiousPractice) && (
                <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                  <CardTitle>Religion &amp; Community</CardTitle>
                  <InfoGrid items={[
                    { label: "Religion",           value: p.religion },
                    { label: "Caste",              value: p.caste },
                    { label: "Sub-Caste",          value: p.subCaste },
                    { label: "Caste No Bar",       value: p.casteNoBar },
                    { label: "Religious Practice", value: p.religiousPractice },
                    { label: "Community / Sect",   value: p.community },
                  ]} />
                </div>
              )}

              {/* Family */}
              <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                <CardTitle>Family Details</CardTitle>
                <div className="grid grid-cols-2 mb-5">
                  <div className="py-3.5 pr-4 border-b border-r border-[#f0ede9]">
                    <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-0.5">Father's Name</p>
                    <p className="text-[0.85rem] font-semibold text-[#1c1917]">{v(p.fatherName)}</p>
                    <p className="text-[0.78rem] text-gray-500 mt-0.5">{v(p.fatherOccupation, "")}</p>
                  </div>
                  <div className="py-3.5 pl-4 border-b border-[#f0ede9]">
                    <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-0.5">Mother's Name</p>
                    <p className="text-[0.85rem] font-semibold text-[#1c1917]">{v(p.motherName)}</p>
                    <p className="text-[0.78rem] text-gray-500 mt-0.5">{v(p.motherOccupation, "")}</p>
                  </div>
                  <div className="col-span-2 py-3.5 border-b border-[#f0ede9]">
                    <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-0.5">Siblings</p>
                    <p className="text-[0.85rem] font-semibold text-[#1c1917]">
                      {[
                        p.brothers ? `${p.brothers} Brother(s)${p.brothersMarried ? ` · ${p.brothersMarried} married` : ""}` : "",
                        p.sisters  ? `${p.sisters} Sister(s)${p.sistersMarried ? ` · ${p.sistersMarried} married` : ""}` : "",
                      ].filter(Boolean).join("   ") || "—"}
                    </p>
                  </div>
                </div>
                <InfoGrid items={[
                  { label: "Family Type",   value: p.familyType },
                  { label: "Family Values", value: p.familyValues },
                  { label: "Family Status", value: p.familyStatus },
                  { label: "Native Place",  value: p.familyLocation },
                ]} />
              </div>

              {/* Education & Profession */}
              <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                <CardTitle>Education &amp; Profession</CardTitle>
                <div>
                  <div className="flex gap-4 items-start py-4 border-b border-[#f0ede9]">
                    <div className="w-[42px] h-[42px] rounded-xl bg-[#fdf3e3] border border-[#e8c98a] flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={18} className="text-[#c2852a]" />
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-0.5">Highest Qualification</p>
                      <p className="text-[0.95rem] font-semibold text-[#1c1917] mb-0.5">{v(p.education)}</p>
                      <p className="text-[0.8rem] text-gray-400">
                        {[p.fieldOfStudy, p.college].filter(Boolean).join(" · ") || "—"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start pt-4">
                    <div className="w-[42px] h-[42px] rounded-xl bg-[#fdf3e3] border border-[#e8c98a] flex items-center justify-center flex-shrink-0">
                      <Briefcase size={18} className="text-[#c2852a]" />
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-0.5">Working As</p>
                      <p className="text-[0.95rem] font-semibold text-[#1c1917] mb-0.5">{v(p.occupation)}</p>
                      <p className="text-[0.8rem] text-gray-400">
                        {[p.employmentType, p.company ? `at ${p.company}` : "", p.workLocation, p.income].filter(Boolean).join(" · ") || "—"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lifestyle */}
              <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                <CardTitle>Lifestyle</CardTitle>
                <InfoGrid items={[
                  { label: "Diet",         value: p.diet },
                  { label: "Smoking",      value: p.smoking },
                  { label: "Drinking",     value: p.drinking },
                  { label: "Fitness",      value: p.fitness },
                  { label: "Own Vehicle",  value: p.vehicle },
                  { label: "Own Property", value: p.property },
                ]} />
                {p.hobbies && p.hobbies.length > 0 && (
                  <>
                    <div className="h-px bg-[#f0ede9] my-4" />
                    <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-3">Hobbies &amp; Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {p.hobbies.map(h => (
                        <span key={h} className="text-[0.78rem] font-medium px-3 py-1.5 rounded-full"
                          style={{ background: "#fdf6ec", color: "#c2852a", border: "1px solid #f0ddb8" }}>{h}</span>
                      ))}
                    </div>
                  </>
                )}
                {p.languages && p.languages.length > 0 && (
                  <>
                    <div className="h-px bg-[#f0ede9] my-4" />
                    <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-3">Languages Known</p>
                    <div className="flex flex-wrap gap-2">
                      {p.languages.map(l => (
                        <span key={l} className="text-[0.75rem] font-medium px-3 py-1 rounded-full border border-[#ece8e1] text-[#4a3f35]">{l}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Partner Preferences */}
              {(p.partnerAgeMin || p.partnerReligion || p.partnerCaste || p.partnerEducation || p.partnerDesc) && (
                <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                  <CardTitle>Partner Preferences</CardTitle>
                  <InfoGrid items={[
                    { label: "Age Range",      value: p.partnerAgeMin && p.partnerAgeMax ? `${p.partnerAgeMin} – ${p.partnerAgeMax}` : null },
                    { label: "Height Range",   value: p.partnerHeightMin && p.partnerHeightMax ? `${p.partnerHeightMin} – ${p.partnerHeightMax}` : null },
                    { label: "Marital Status", value: p.partnerMaritalStatus },
                    { label: "Religion",       value: p.partnerReligion },
                    { label: "Caste",          value: p.partnerCaste },
                    { label: "Education",      value: p.partnerEducation },
                    { label: "Income",         value: p.partnerIncome },
                    { label: "Location",       value: p.partnerLocation },
                    { label: "Diet",           value: p.partnerDiet },
                    { label: "Manglik",        value: p.partnerManglik },
                  ]} />
                  {p.partnerDesc && (
                    <>
                      <div className="h-px bg-[#f0ede9] my-4" />
                      <p className="text-[0.68rem] font-bold tracking-[0.07em] uppercase text-gray-400 mb-2">Ideal Partner</p>
                      <p className="text-gray-500 text-[0.87rem] leading-[1.75]">{p.partnerDesc}</p>
                    </>
                  )}
                </div>
              )}

              {/* Photos */}
              {p.photos && p.photos.length > 1 && (
                <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                  <CardTitle>Photos</CardTitle>
                  <div className="flex flex-wrap gap-3">
                    {p.photos.map((src, i) => (
                      <img key={i} src={src} alt="" className="w-28 h-28 rounded-xl object-cover border border-[#ece8e1]" />
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* ── SIDEBAR ── */}
            <div className="flex flex-col gap-5 order-first lg:order-last lg:sticky lg:top-20">

              {/* Personal Details */}
              <div className="bg-white border border-[#ede8e1] rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                <div className="bg-[#1c1917] px-5 py-4">
                  <p className="text-[1.05rem] font-bold text-white tracking-tight m-0"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Personal Details
                  </p>
                </div>
                <div className="px-5 pt-2 pb-5">
                  {[
                    { label: "Age",            value: age ? `${age} years` : null },
                    { label: "Gender",         value: p.gender },
                    { label: "Height",         value: p.height },
                    { label: "Weight",         value: p.weight },
                    { label: "Body Type",      value: p.bodyType },
                    { label: "Complexion",     value: p.complexion },
                    { label: "Marital Status", value: p.maritalStatus },
                    { label: "Profile For",    value: p.profileFor },
                    { label: "Mother Tongue",  value: p.motherTongue },
                    { label: "Nationality",    value: p.nationality },
                    { label: "Religion",       value: p.religion },
                    { label: "Caste",          value: p.caste },
                    { label: "Manglik",        value: p.manglik },
                    { label: "Diet",           value: p.diet },
                    { label: "Smoking",        value: p.smoking },
                    { label: "Drinking",       value: p.drinking },
                    { label: "Location",       value: city || null },
                  ]
                    .filter(({ value }) => value && String(value).trim() !== "")
                    .map(({ label, value }, i, arr) => (
                      <div key={label}
                        className={`flex justify-between items-baseline py-2.5 gap-2 ${i < arr.length - 1 ? "border-b border-[#f0ede9]" : ""}`}>
                        <span className="text-[0.72rem] text-gray-400 font-normal whitespace-nowrap">{label}</span>
                        <span className="text-[0.8rem] font-semibold text-[#1c1917] text-right">{value}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Contact */}
              {p.mobile && (
                <div className="bg-white border border-[#ede8e1] rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                  <div className="bg-[#1c1917] px-5 py-4">
                    <p className="text-[1.05rem] font-bold text-white tracking-tight m-0"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Contact
                    </p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-[0.72rem] text-gray-400 mb-0.5">Mobile</p>
                    <p className="text-[0.88rem] font-semibold text-[#1c1917]">{p.mobile}</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}