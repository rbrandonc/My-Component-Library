import { createGlobalStyle, css } from "styled-components";
import "@fontsource/maven-pro";

const reset = `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  height: 100vh;
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

function adjustBrightness(col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var R = parseInt(col.substring(0, 2), 16);
  var G = parseInt(col.substring(2, 4), 16);
  var B = parseInt(col.substring(4, 6), 16);

  // to make the colour less bright than the input
  // change the following three "+" symbols to "-"
  R = R + amt;
  G = G + amt;
  B = B + amt;

  if (R > 255) R = 255;
  else if (R < 0) R = 0;

  if (G > 255) G = 255;
  else if (G < 0) G = 0;

  if (B > 255) B = 255;
  else if (B < 0) B = 0;

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return (usePound ? "#" : "") + RR + GG + BB;
}

export const GlobalStyles = createGlobalStyle`
  ${css`
    ${reset}[0]
  `}

  body {
    font-family: "Maven Pro";
    color: "orange !important";
    background-color: "orange";
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

const common = {
  spacing: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px"
  },
  fontSizes: {
    p: "16px",
    sm: "12px",
    lg: "20px",
    h1: "24px",
    h2: "32px"
  }
};

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  colors: {
    primary: "#381d2a",
    secondary: "#3e6990",
    tertiary: "#aabd8c",
    warn: "#f39b6d",
    white: "#ffffff"
  },
  ...common
};

Object.keys(lightTheme.colors).forEach((color) => {
  lightTheme.colors[`${color}Dark`] = adjustBrightness(
    lightTheme.colors[color],
    -10
  );

  lightTheme.colors[`${color}Darker`] = adjustBrightness(
    lightTheme.colors[color],
    -20
  );
});

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  colors: {
    primary: "#381d2a",
    secondary: "#3e6990",
    tertiary: "#aabd8c",
    warn: "#f39b6d",
    white: "white"
  },
  ...common
};
