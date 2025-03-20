import React, { createContext, useState } from 'react';


export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [mail, setMail] = useState('');
  const [lang, setLang] = useState('');
  const [level, setLevel] = useState(0);

  return (
    <UserContext.Provider value={{ mail, setMail, lang, setLang, level, setLevel }}>
      {children}
    </UserContext.Provider>
  );
};
