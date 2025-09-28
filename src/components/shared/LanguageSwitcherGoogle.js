// import React, { useEffect } from "react";

// const languages = [
//   { code: "en", label: "English", flag: "🇺🇸" },
//   { code: "bn", label: "বাংলা", flag: "🇧🇩" },
//   { code: "ja", label: "日本語", flag: "🇯🇵" },
// ];

// const LanguageSwitcher = () => {
//   useEffect(() => {
//     // Wait until Google Translate is loaded
//     const interval = setInterval(() => {
//       if (document.querySelector(".goog-te-combo")) {
//         clearInterval(interval);
//       }
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   const changeLanguage = (lang) => {
//     const select = document.querySelector(".goog-te-combo");
//     if (select) {
//       select.value = lang;
//       select.dispatchEvent(new Event("change"));
//     } else {
//       console.error("Google Translate not loaded yet");
//     }
//   };

//   return (
//     <div className="relative inline-block w-28">
//       <select
//         onChange={(e) => changeLanguage(e.target.value)}
//         className="px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-md text-sm cursor-pointer"
//       >
//         <option value="en">English</option>
//         <option value="bn">বাংলা</option>
//         <option value="ja">日本語</option>
//       </select>
//     </div>
//   );
// };

// export default LanguageSwitcher;

import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    // Wait until Google Translate is loaded
    const interval = setInterval(() => {
      if (document.querySelector(".goog-te-combo")) {
        clearInterval(interval);
      }
    }, 500);

    // Auto hide Google Translate top bar after 2 seconds
    const timer = setInterval(() => {
      const bannerFrame = document.querySelector(
        ".goog-te-banner-frame.skiptranslate"
      );
      if (bannerFrame) {
        setTimeout(() => {
          bannerFrame.style.display = "none";
          document.body.style.top = "0px";
        }, 2000); // 2s pore hide hobe
        clearInterval(timer);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      // Dispatch change instantly
      select.dispatchEvent(new Event("change", { bubbles: true }));

      // Force Google Translate to apply immediately
      setTimeout(() => {
        select.dispatchEvent(new Event("change", { bubbles: true }));
        select.dispatchEvent(new Event("blur"));
      }, 100);
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
