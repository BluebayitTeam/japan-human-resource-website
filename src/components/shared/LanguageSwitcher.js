// LanguageSwitcher.js
import React from 'react';
import { Button } from '@material-ui/core';
import i18n from 'i18next';

const LanguageSwitcher = () => {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('tr')}>Turkish</Button>
      <Button onClick={() => changeLanguage('ar')}>Arabic</Button>
    </div>
  );
};

export default LanguageSwitcher;
