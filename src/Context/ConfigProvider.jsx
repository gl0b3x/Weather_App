import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext({});

export const ConfigProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (prefersDarkScheme) {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === "dark") {
      root.style.setProperty("--background", "13,13,54");
      root.style.setProperty("--textColor", "255,255,255");
      root.style.setProperty("--backgroundReverse", "168,202,218");
      root.style.setProperty("--textReverse", "0,0,0");
      root.style.setProperty(
        "--backgroundImage",
        'url("/images/backgroundSearchCity.webp")',
      );
    } else {
      root.style.setProperty("--background", "168,202,218");
      root.style.setProperty("--textColor", "0,0,0");
      root.style.setProperty("--backgroundReverse", "13,13,54");
      root.style.setProperty("--textReverse", "255,255,255");
      root.style.setProperty(
        "--backgroundImage",
        'url("/images/backgroundSearchCity_light.webp")',
      );
    }
  }, [currentTheme]);

  return (
    <WeatherContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
