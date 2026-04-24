// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   MapPin, Briefcase, GraduationCap, Heart, ArrowLeft,
//   Star, Lock, Shield , CheckCircle
// } from "lucide-react";
// import { useShortlist } from "../context/ShortlistContext";
// import { profiles } from "../data/profiles";
// import { useInterest } from "../context/InterestContext";


// const AVATAR_BG = [
//   ["#d4cfc9", "#b8b0a6"],
//   ["#c9cfd4", "#c6ced3"],
//   ["#cfd4cc", "#adb8a8"],
//   ["#d4cac9", "#b8a6a6"],
// ];

// function AvatarPlaceholder({ name }) {
//   const initials = name?.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
//   const [g1, g2] = AVATAR_BG[initials?.charCodeAt(0) % AVATAR_BG.length];
//   return (
//     <div className="w-full h-full flex items-center justify-center"
//       style={{ background: `linear-gradient(145deg, ${g1}, ${g2})` }}>
//       <span className="font-bold tracking-[4px]"
//         style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem", color: "rgba(255,255,255,0.82)" }}>
//         {initials}
//       </span>
//     </div>
//   );
// }

// function CardTitle({ children }) {
//   return (
//     <h2 className="flex items-center gap-2.5 m-0 mb-[1.1rem] text-[1.2rem] font-bold text-[#1c1917] tracking-tight"
//       style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//       <span className="w-[3px] h-5 rounded-[2px] bg-[#c2852a] flex-shrink-0" />
//       {children}
//     </h2>
//   );
// }

// function DetailItem({ icon, label, value }) {
//   if (!value) return null;
//   return (
//     <div className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#f9f7f4] transition-colors">
//       {icon && <span className="text-[#c2852a] mt-0.5 flex-shrink-0">{icon}</span>}
//       <div>
//         <p className="text-[0.67rem] font-bold tracking-[0.06em] uppercase text-gray-400 m-0 mb-0.5">{label}</p>
//         <p className="text-[0.83rem] font-semibold text-[#1c1917] m-0">{value}</p>
//       </div>
//     </div>
//   );
// }

// export default function ViewProfile() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const profile = profiles.find((p) => p.id === Number(id)); 
//   const { addToShortlist, isShortlisted } = useShortlist();
//   const { sendInterest, hasSentInterest } = useInterest();
//   const [isUnlocked, setIsUnlocked] = useState(false);


// const shouldBlur = profile?.id === 1 && !isUnlocked;  if (!profile) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f9f7f4]">
//         <div className="text-center">
//           <p className="text-gray-500">Profile not found</p>
//           <button onClick={() => navigate(-1)}
//             className="mt-4 text-[#c2852a] bg-transparent border-none cursor-pointer text-[0.85rem]">
//             ← Go back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>

//       <div className="min-h-screen px-6 pt-8 pb-16 mt-12">
//         <div className="max-w-[1200px] mx-auto">

//           {/* Back button */}
//           <button
//             onClick={() => navigate(-1)}
//             className="inline-flex items-center gap-1.5 mb-6 text-gray-500 text-[0.8rem] font-medium bg-white border border-[#ede8e1] rounded-lg px-3.5 py-1.5 cursor-pointer hover:text-[#c2852a] hover:border-[#e8c98a] transition-colors"
//           >
//             <ArrowLeft size={13} /> Back to Matches
//           </button>

//           {/* Two-column grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">

//             {/* ── LEFT COLUMN ── */}
//             <div className="lg:sticky lg:top-20">
//               <div className="bg-white border border-[#ede8e1] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)]">

//                 {/* Photo */}
//                 <div className="relative aspect-[3/4] bg-[#f0ece7] overflow-hidden">
//                   {profile.photo
//                     ? <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
//                     : <AvatarPlaceholder name={profile.name} />
//                   }
//                   {/* Fade overlay */}
//                   <div className="absolute inset-0"
//                     style={{ background: "linear-gradient(to top, rgba(28,25,23,0.28) 0%, transparent 50%)" }} />

//                   {/* Premium badge
//                   <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold tracking-[0.03em] bg-[#c2852a] text-white backdrop-blur-sm">
//                     <Star size={9} fill="white" /> Premium
//                   </div> */}

//                  {/* Verified badge */}
//                 <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold tracking-[0.03em] bg-white/90 text-[#1c1917] border border-[#ede8e1] backdrop-blur-sm">
//                   <CheckCircle
//                     size={16}
//                     className="text-blue-500"
//                     fill="currentColor"
//                     stroke="white"
//                     strokeWidth={3}
//                   />
//                   Verified
//                 </div>
//                 </div> 

//                 {/* Name strip */}
//                 <div className="bg-[#1c1917] px-5 pt-5 pb-4">
//                   <h1 className="m-0 mb-1 text-white font-bold tracking-tight leading-tight text-[1.55rem]"
//                     style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//                     {profile.name}, {profile.age}
//                   </h1>
//                   <div className="flex items-center gap-1 text-white/55 text-[0.78rem]">
//                     <MapPin size={12} />
//                     <span>{profile.city}</span>
//                   </div>
//                 </div>

//                 {/* Tag pills */}
//                 <div className="flex flex-wrap gap-1.5 px-5 pt-4">
//                   {profile.religion && (
//                     <span className="px-3 py-1 rounded-full text-[0.7rem] font-medium border bg-[#fdf3e3] text-[#c2852a] border-[#e8c98a]">
//                       {profile.religion}
//                     </span>
//                   )}
//                   {profile.diet && (
//                     <span className="px-3 py-1 rounded-full text-[0.7rem] font-medium border bg-green-50 text-green-600 border-green-200">
//                       {profile.diet}
//                     </span>
//                   )}
//                   {profile.working && (
//                     <span className="px-3 py-1 rounded-full text-[0.7rem] font-medium border bg-blue-50 text-blue-600 border-blue-200">
//                       {profile.working}
//                     </span>
//                   )}
//                 </div>

//                 {/* Action buttons */}
                              
//                 <div className="px-5 pt-4 pb-5 flex flex-col gap-2">
//                   <button
//                     disabled={hasSentInterest(profile.id)}
//                     onClick={() => {
//                       sendInterest(profile);
//                     }}
//                     className={`w-full py-3 rounded-xl text-[0.82rem] font-semibold flex items-center justify-center gap-1.5 tracking-wide transition-all
//                       ${
//                         hasSentInterest(profile.id)
//                           ? "bg-green-100 text-green-700 cursor-not-allowed"
//                           : "bg-[#1c1917] text-white hover:opacity-85 cursor-pointer"
//                       }`}
//                   >
//                     <Heart
//                       size={13}
//                       fill={hasSentInterest(profile.id) ? "none" : "white"}
//                       className={hasSentInterest(profile.id) ? "text-green-600" : ""}
//                     />
//                     {hasSentInterest(profile.id) ? "Interest Sent ✓" : "Send Interest"}
//                   </button>

//                     {/* Chat Button — only after interest */}
//                   <button
//                     onClick={() => navigate(`/chat/${profile.id}`)}
//                     className="w-full py-2.5 rounded-xl text-[0.82rem] font-semibold
//                       flex items-center justify-center gap-1.5
//                       bg-[#fdf3e3] border-[1.5px] border-[#e8c98a]
//                       text-[#c2852a] hover:bg-[#faecd3] transition-all"
//                   >
//                     💬 Chat Now
//                   </button>

//                   <button
//                     onClick={() => addToShortlist(profile)}
//                     className={`w-full py-2.5 rounded-xl text-[0.82rem] font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
//                       isShortlisted(profile.id)
//                         ? "bg-[#fdf3e3] border-[1.5px] border-[#e8c98a] text-[#c2852a]"
//                         : "bg-white border-[1.5px] border-[#e5e0d8] text-gray-500 hover:border-[#c2852a] hover:text-[#c2852a]"
//                     }`}
//                   >
//                     <Star
//                       size={12}
//                       fill={isShortlisted(profile.id) ? "#c2852a" : "none"}
//                       stroke={isShortlisted(profile.id) ? "#c2852a" : "currentColor"}
//                     />
//                     {isShortlisted(profile.id) ? "Shortlisted ✓" : "Shortlist"}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* ── RIGHT COLUMN ── */}
//             <div className="flex flex-col gap-5">

//               {/* About */}
//               {profile.about && (
//                 <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
//                   <CardTitle>About</CardTitle>
//                   <p className="text-gray-500 text-[0.87rem] leading-[1.75] m-0">{profile.about}</p>
//                   {profile.preferences && (
//                     <>
//                       <div className="h-px bg-[#f0ede9] my-[1.1rem]" />
//                       <CardTitle>Preferences</CardTitle>
//                       <p className="text-gray-500 text-[0.87rem] leading-[1.75] m-0">{profile.preferences}</p>
//                     </>
//                   )}
//                 </div>
//               )}

//               {/* Blurred section wrapper */}
//               <div className="relative">

//                 {/* Lock overlay */}
//                 {shouldBlur && (
//                   <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl"
//                     style={{ background: "rgba(249,247,244,0.7)", backdropFilter: "blur(6px)" }}>
//                     <div className="text-center px-8 py-8 bg-white border border-[#ede8e1] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] max-w-[280px]">
//                       <div className="w-12 h-12 rounded-xl bg-[#fdf3e3] border border-[#e8c98a] flex items-center justify-center mx-auto mb-4">
//                         <Lock size={20} className="text-[#c2852a]" />
//                       </div>
//                       <h3 className="m-0 mb-1.5 font-bold text-[#1c1917] text-[1.15rem]"
//                         style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//                         Unlock Full Profile
//                       </h3>
//                       <p className="text-[0.78rem] text-gray-500 m-0 mb-4 leading-[1.6]">
//                         Send interest to view complete professional, personal, and family details.
//                       </p>
//                       <button
//                         onClick={() => setIsUnlocked(true)}
//                         className="px-6 py-2 bg-[#c2852a] text-white border-none rounded-lg text-[0.8rem] font-semibold cursor-pointer hover:opacity-85 transition-opacity tracking-[0.03em]"
//                       >
//                         Unlock Details
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* Content — blurred when locked */}
//                 <div
//                   className="flex flex-col gap-5 transition-[filter] duration-300"
//                   style={{
//                     filter: shouldBlur ? "blur(5px)" : "none",
//                     pointerEvents: shouldBlur ? "none" : "auto",
//                     userSelect: shouldBlur ? "none" : "auto",
//                   }}
//                 >
//                   {/* Professional Details */}
//                   <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
//                     <CardTitle>Professional Details</CardTitle>
//                     <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1">
//                       <DetailItem icon={<Briefcase size={13} />} label="Profession"    value={profile.profession} />
//                       <DetailItem icon={<Briefcase size={13} />} label="Job Role"      value={profile.jobRole} />
//                       <DetailItem icon={<Briefcase size={13} />} label="Sector"        value={profile.workingSector} />
//                       <DetailItem icon={<Briefcase size={13} />} label="Annual Income" value={profile.annualIncome} />
//                       <DetailItem icon={<MapPin size={13} />}    label="Work Location" value={profile.workLocation} />
//                       <DetailItem icon={<Briefcase size={13} />} label="Work Type"     value={profile.workType} />
//                     </div>
//                   </div>

//                   {/* Education & Personal */}
//                   <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
//                     <CardTitle>Education & Personal</CardTitle>
//                     <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1">
//                       <DetailItem icon={<GraduationCap size={13} />} label="Education"   value={profile.education} />
//                       <DetailItem label="Personality"  value={profile.personalityType} />
//                       <DetailItem label="Interests"    value={profile.interest} />
//                       <DetailItem label="Hobbies"      value={profile.hobbies} />
//                       <DetailItem label="Likes"        value={profile.likes} />
//                       <DetailItem label="Dislikes"     value={profile.dislikes} />
//                     </div>
//                   </div>

//                   {/* Family Details */}
//                   <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
//                     <CardTitle>Family Details</CardTitle>
//                     <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1">
//                       <DetailItem label="Father's Name" value={profile.fatherName} />
//                       <DetailItem label="Mother's Name" value={profile.motherName} />
//                       <DetailItem label="Siblings"      value={profile.siblings} />
//                       <DetailItem label="Family Type"   value={profile.familyType} />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }







import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin, Briefcase, GraduationCap, Heart, ArrowLeft,
  Star, Lock, CheckCircle
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useShortlist } from "../context/ShortlistContext";
import { profiles } from "../data/profiles";
import { useInterest } from "../context/InterestContext";

const AVATAR_BG = [
  ["#d4cfc9", "#b8b0a6"],
  ["#c9cfd4", "#c6ced3"],
  ["#cfd4cc", "#adb8a8"],
  ["#d4cac9", "#b8a6a6"],
];

function AvatarPlaceholder({ name }) {
  const initials = name?.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const [g1, g2] = AVATAR_BG[initials?.charCodeAt(0) % AVATAR_BG.length];
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `linear-gradient(145deg, ${g1}, ${g2})` }}
    >
      <span
        className="font-bold tracking-[4px]"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem", color: "rgba(255,255,255,0.82)" }}
      >
        {initials}
      </span>
    </div>
  );
}

function CardTitle({ children }) {
  return (
    <h2
      className="flex items-center gap-2.5 m-0 mb-[1.1rem] text-[1.2rem] font-bold text-[#1c1917] tracking-tight"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <span className="w-[3px] h-5 rounded-[2px] bg-[#c2852a] flex-shrink-0" />
      {children}
    </h2>
  );
}

function DetailItem({ icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#f9f7f4] transition-colors">
      {icon && <span className="text-[#c2852a] mt-0.5 flex-shrink-0">{icon}</span>}
      <div>
        <p className="text-[0.67rem] font-bold tracking-[0.06em] uppercase text-gray-400 m-0 mb-0.5">{label}</p>
        <p className="text-[0.83rem] font-semibold text-[#1c1917] m-0">{value}</p>
      </div>
    </div>
  );
}

export default function ViewProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const profile = profiles.find((p) => p.id === Number(id));
  const { addToShortlist, isShortlisted } = useShortlist();
  const { sendInterest, hasSentInterest } = useInterest();
  const [isUnlocked, setIsUnlocked] = useState(false);

  const shouldBlur = profile?.id === 1 && !isUnlocked;

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f7f4]">
        <div className="text-center">
          <p className="text-gray-500">{t("viewProfile.profileNotFound")}</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 text-[#c2852a] bg-transparent border-none cursor-pointer text-[0.85rem]"
          >
            {t("viewProfile.goBack")}
          </button>
        </div>
      </div>
    );
  }

  const lbl = (key) => t(`viewProfile.labels.${key}`);

  return (
    <>
      <div className="min-h-screen px-6 pt-8 pb-16 mt-12">
        <div className="max-w-[1200px] mx-auto">

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 mb-6 text-gray-500 text-[0.8rem] font-medium bg-white border border-[#ede8e1] rounded-lg px-3.5 py-1.5 cursor-pointer hover:text-[#c2852a] hover:border-[#e8c98a] transition-colors"
          >
            <ArrowLeft size={13} /> {t("viewProfile.backBtn")}
          </button>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">

            {/* ── LEFT COLUMN ── */}
            <div className="lg:sticky lg:top-20">
              <div className="bg-white border border-[#ede8e1] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)]">

                {/* Photo */}
                <div className="relative aspect-[3/4] bg-[#f0ece7] overflow-hidden">
                  {profile.photo
                    ? <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
                    : <AvatarPlaceholder name={profile.name} />
                  }
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(28,25,23,0.28) 0%, transparent 50%)" }}
                  />

                  {/* Verified badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold tracking-[0.03em] bg-white/90 text-[#1c1917] border border-[#ede8e1] backdrop-blur-sm">
                    <CheckCircle size={16} className="text-blue-500" fill="currentColor" stroke="white" strokeWidth={3} />
                    {t("viewProfile.verified")}
                  </div>
                </div>

                {/* Name strip */}
                <div className="bg-[#1c1917] px-5 pt-5 pb-4">
                  <h1
                    className="m-0 mb-1 text-white font-bold tracking-tight leading-tight text-[1.55rem]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {profile.name}, {profile.age}
                  </h1>
                  <div className="flex items-center gap-1 text-white/55 text-[0.78rem]">
                    <MapPin size={12} />
                    <span>{profile.city}</span>
                  </div>
                </div>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-1.5 px-5 pt-4">
                  {profile.religion && (
                    <span className="px-3 py-1 rounded-full text-[0.7rem] font-medium border bg-[#fdf3e3] text-[#c2852a] border-[#e8c98a]">
                      {profile.religion}
                    </span>
                  )}
                  {profile.diet && (
                    <span className="px-3 py-1 rounded-full text-[0.7rem] font-medium border bg-green-50 text-green-600 border-green-200">
                      {profile.diet}
                    </span>
                  )}
                  {profile.working && (
                    <span className="px-3 py-1 rounded-full text-[0.7rem] font-medium border bg-blue-50 text-blue-600 border-blue-200">
                      {profile.working}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="px-5 pt-4 pb-5 flex flex-col gap-2">

                  {/* Send Interest */}
                  <button
                    disabled={hasSentInterest(profile.id)}
                    onClick={() => sendInterest(profile)}
                    className={`w-full py-3 rounded-xl text-[0.82rem] font-semibold flex items-center justify-center gap-1.5 tracking-wide transition-all ${
                      hasSentInterest(profile.id)
                        ? "bg-green-100 text-green-700 cursor-not-allowed"
                        : "bg-[#1c1917] text-white hover:opacity-85 cursor-pointer"
                    }`}
                  >
                    <Heart
                      size={13}
                      fill={hasSentInterest(profile.id) ? "none" : "white"}
                      className={hasSentInterest(profile.id) ? "text-green-600" : ""}
                    />
                    {hasSentInterest(profile.id)
                      ? t("viewProfile.interestSent")
                      : t("viewProfile.sendInterest")}
                  </button>

                  {/* Chat
                  <button
                    onClick={() => navigate(`/chat/${profile.id}`)}
                    className="w-full py-2.5 rounded-xl text-[0.82rem] font-semibold flex items-center justify-center gap-1.5 bg-[#fdf3e3] border-[1.5px] border-[#e8c98a] text-[#c2852a] hover:bg-[#faecd3] transition-all"
                  >
                    {t("viewProfile.chatNow")}
                  </button> */}

                  {/* Shortlist */}
                  <button
                    onClick={() => addToShortlist(profile)}
                    className={`w-full py-2.5 rounded-xl text-[0.82rem] font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      isShortlisted(profile.id)
                        ? "bg-[#fdf3e3] border-[1.5px] border-[#e8c98a] text-[#c2852a]"
                        : "bg-white border-[1.5px] border-[#e5e0d8] text-gray-500 hover:border-[#c2852a] hover:text-[#c2852a]"
                    }`}
                  >
                    <Star
                      size={12}
                      fill={isShortlisted(profile.id) ? "#c2852a" : "none"}
                      stroke={isShortlisted(profile.id) ? "#c2852a" : "currentColor"}
                    />
                    {isShortlisted(profile.id)
                      ? t("viewProfile.shortlisted")
                      : t("viewProfile.shortlist")}
                  </button>

                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="flex flex-col gap-5">

              {/* About */}
              {profile.about && (
                <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                  <CardTitle>{t("viewProfile.aboutTitle")}</CardTitle>
                  <p className="text-gray-500 text-[0.87rem] leading-[1.75] m-0">{profile.about}</p>
                  {profile.preferences && (
                    <>
                      <div className="h-px bg-[#f0ede9] my-[1.1rem]" />
                      <CardTitle>{t("viewProfile.preferencesTitle")}</CardTitle>
                      <p className="text-gray-500 text-[0.87rem] leading-[1.75] m-0">{profile.preferences}</p>
                    </>
                  )}
                </div>
              )}

              {/* Blurred section wrapper */}
              <div className="relative">

                {/* Lock overlay */}
                {shouldBlur && (
                  <div
                    className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl"
                    style={{ background: "rgba(249,247,244,0.7)", backdropFilter: "blur(6px)" }}
                  >
                    <div className="text-center px-8 py-8 bg-white border border-[#ede8e1] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] max-w-[280px]">
                      <div className="w-12 h-12 rounded-xl bg-[#fdf3e3] border border-[#e8c98a] flex items-center justify-center mx-auto mb-4">
                        <Lock size={20} className="text-[#c2852a]" />
                      </div>
                      <h3
                        className="m-0 mb-1.5 font-bold text-[#1c1917] text-[1.15rem]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {t("viewProfile.unlockTitle")}
                      </h3>
                      <p className="text-[0.78rem] text-gray-500 m-0 mb-4 leading-[1.6]">
                        {t("viewProfile.unlockDesc")}
                      </p>
                      <button
                        onClick={() => setIsUnlocked(true)}
                        className="px-6 py-2 bg-[#c2852a] text-white border-none rounded-lg text-[0.8rem] font-semibold cursor-pointer hover:opacity-85 transition-opacity tracking-[0.03em]"
                      >
                        {t("viewProfile.unlockBtn")}
                      </button>
                    </div>
                  </div>
                )}

                {/* Content — blurred when locked */}
                <div
                  className="flex flex-col gap-5 transition-[filter] duration-300"
                  style={{
                    filter: shouldBlur ? "blur(5px)" : "none",
                    pointerEvents: shouldBlur ? "none" : "auto",
                    userSelect: shouldBlur ? "none" : "auto",
                  }}
                >
                  {/* Professional Details */}
                  <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                    <CardTitle>{t("viewProfile.professionalTitle")}</CardTitle>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1">
                      <DetailItem icon={<Briefcase size={13} />} label={lbl("profession")}    value={profile.profession} />
                      <DetailItem icon={<Briefcase size={13} />} label={lbl("jobRole")}       value={profile.jobRole} />
                      <DetailItem icon={<Briefcase size={13} />} label={lbl("sector")}        value={profile.workingSector} />
                      <DetailItem icon={<Briefcase size={13} />} label={lbl("annualIncome")}  value={profile.annualIncome} />
                      <DetailItem icon={<MapPin size={13} />}    label={lbl("workLocation")}  value={profile.workLocation} />
                      <DetailItem icon={<Briefcase size={13} />} label={lbl("workType")}      value={profile.workType} />
                    </div>
                  </div>

                  {/* Education & Personal */}
                  <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                    <CardTitle>{t("viewProfile.educationTitle")}</CardTitle>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1">
                      <DetailItem icon={<GraduationCap size={13} />} label={lbl("education")}   value={profile.education} />
                      <DetailItem label={lbl("personality")} value={profile.personalityType} />
                      <DetailItem label={lbl("interests")}   value={profile.interest} />
                      <DetailItem label={lbl("hobbies")}     value={profile.hobbies} />
                      <DetailItem label={lbl("likes")}       value={profile.likes} />
                      <DetailItem label={lbl("dislikes")}    value={profile.dislikes} />
                    </div>
                  </div>

                  {/* Family Details */}
                  <div className="bg-white border border-[#ede8e1] rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.045)]">
                    <CardTitle>{t("viewProfile.familyTitle")}</CardTitle>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1">
                      <DetailItem label={lbl("fatherName")} value={profile.fatherName} />
                      <DetailItem label={lbl("motherName")} value={profile.motherName} />
                      <DetailItem label={lbl("siblings")}   value={profile.siblings} />
                      <DetailItem label={lbl("familyType")} value={profile.familyType} />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
