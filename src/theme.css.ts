import { createTheme } from "@vanilla-extract/css";

export const [darkTheme, vars] = createTheme({
  color: {
    background: '#2b2f3a', // Background (Dark Grayish Bluish)
    backgroundHighlight: '#3c3f4a', // Background Highlighted (Dark Grayish Bluish)
    red: '#d43f4a', // Muted Red
    green: '#3d8e5d', // Muted Green
    blue: '#2f6d99', // Muted Blue
    text: '#e0e0e0', // Text (For light text against dark backgrounds)
    subtext: '#a0a0a0', // Subtext (For lesser important text)
    divider: '#42465b', // Border/Divider Color
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    background: '#e6eaf0', // Background (Light Grayish Bluish)
    backgroundHighlight: '#d5d8e0', // Background Highlighted (Dark Grayish Bluish)
    red: '#e05a67', // Muted Red
    green: '#59a883', // Muted Green
    blue: '#508db3', // Muted Blue
    text: '#2c2f3b', // Text (For dark text against light backgrounds)
    subtext: '#6c6f7f', // Subtext (For lesser important text)
    divider: '#b2b5c3', // Border/Divider Color
  },
});
