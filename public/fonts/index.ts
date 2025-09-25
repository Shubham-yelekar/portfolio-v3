import localfont from "next/font/local";

export const generalSans = localfont({
  src: [
    {
      path: "../fonts/general-sans/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/general-sans/GeneralSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/general-sans/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/general-sans/GeneralSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/general-sans/GeneralSans-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/general-sans/GeneralSans-ExtralightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/general-sans/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/general-sans/GeneralSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/general-sans/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/general-sans/GeneralSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/general-sans/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/general-sans/GeneralSans-SemiboldItalic.woff2",
      weight: "400",
      style: "itallic",
    },
    {
      path: "../fonts/general-sans/GeneralSans-Variable.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/general-sans/GeneralSans-VariableItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-generalSans",
});

export const libreSerif = localfont({
  src: [
    {
      path: "../fonts/libre-caslon-condense/LibreCaslonCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/libre-caslon-condense/LibreCaslonCondensed-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/libre-caslon-condense/LibreCaslonCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/libre-caslon-condense/LibreCaslonCondensed-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/libre-caslon-condense/LibreCaslonCondensed-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/libre-caslon-condense/LibreCaslonCondensed-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/libre-caslon-condense/LibreCaslonCondensed-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/libre-caslon-condense/LibreCaslonCondensed-SemiBoldItalic.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-libre-caslon-con",
});
