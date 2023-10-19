import { createTheme } from "@vanilla-extract/css";

export const [darkTheme, vars] = createTheme({
  color: {
    background: "#181818",
    backgroundHighlight: "#1f1f1f",
    red: "#d43f4a", // Muted Red
    green: "#3d8e5d", // Muted Green
    blue: "#2f6d99", // Muted Blue
    text: "#f8f8f8", // Text (For light text against dark backgrounds)
    subtext: "#838383", // Subtext (For lesser important text)
    divider: "#2b2b2b", // Border/Divider Color
  },
  transitions: {
    duration: "0.1s",
    timingFunction: "ease-in-out",
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    background: "#f8f8f8", // Background (Light Grayish Bluish)
    backgroundHighlight: "#ffffff", // Background Highlighted (Dark Grayish Bluish)
    red: "#e05a67", // Muted Red
    green: "#59a883", // Muted Green
    blue: "#508db3", // Muted Blue
    text: "#1f1f1f", // Text (For dark text against light backgrounds)
    subtext: "#5c5c5c", // Subtext (For lesser important text)
    divider: "#e5e5e5", // Border/Divider Color
  },
  transitions: {
    duration: "0.1s",
    timingFunction: "ease-in-out",
  },
});