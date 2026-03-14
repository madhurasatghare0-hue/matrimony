import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

const initData = {
  // step 1
  firstName: "", lastName: "", dob: "", gender: "", maritalStatus: "", profileFor: "",
  height: "", weight: "", bodyType: "", complexion: "", mobile: "", about: "",
  // step 2
  motherTongue: "", nationality: "", currentCity: "", currentState: "", country: "",
  birthCity: "", birthTime: "", rashi: "", nakshatra: "", gotra: "", manglik: "",
  // step 3
  religion: "", caste: "", subCaste: "", casteNoBar: "", religiousPractice: "", community: "",
  // step 4
  fatherName: "", fatherOccupation: "", motherName: "", motherOccupation: "",
  brothers: "", brothersMarried: "", sisters: "", sistersMarried: "",
  familyType: "", familyValues: "", familyStatus: "", familyLocation: "",
  // step 5
  education: "", fieldOfStudy: "", college: "",
  employmentType: "", occupation: "", company: "", income: "", workLocation: "",
  // step 6
  diet: "", smoking: "", drinking: "", fitness: "",
  languages: [], hobbies: [], vehicle: "", property: "",
  // step 7
  partnerAgeMin: "", partnerAgeMax: "",
  partnerHeightMin: "", partnerHeightMax: "",
  partnerMaritalStatus: "", partnerReligion: "", partnerCaste: "",
  partnerEducation: "", partnerIncome: "", partnerLocation: "",
  partnerDiet: "", partnerManglik: "", partnerDesc: "",
  // step 8
  photos: [], idDoc: "",
};

export function ProfileProvider({ children }) {
  const [profileData, setProfileData] = useState(initData);

  // ✅ Always merges — never loses existing fields
  const saveProfile = (newData) => {
    setProfileData(prev => ({ ...prev, ...newData }));
  };

  return (
    <ProfileContext.Provider value={{ profileData, saveProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}