import React, { useEffect } from "react";


const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "bn", label: "বাংলা", flag: "🇧🇩" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

const LanguageSwitcher = () => {
  useEffect(() => {
    // Wait until Google Translate is loaded
    const interval = setInterval(() => {
      if (document.querySelector(".goog-te-combo")) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);


  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    } else {
      console.error("Google Translate not loaded yet");
    }
  };

  return (
    <div className="relative inline-block w-28">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-md text-sm cursor-pointer"
      >
        <option value="en">English</option>
        <option value="bn">বাংলা</option>
        <option value="ja">日本語</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
