import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    let isDark = JSON.parse(localStorage.getItem("darkmode"));
    if (isDark) {
      document.body.classList.add("dark");
      setDarkmode(true);
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkmode", false);
      setDarkmode(false);
    }
  }, []);

  const toggleDarkmode = () => {
    if (!darkmode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkmode", !darkmode);
    setDarkmode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkmode,
        toggleDarkmode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
