import React, { useEffect, useState } from "react";

const dyslexicFontUrl = "https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap";
const dyslexicFontFamily = "'Lexend', Arial, sans-serif";
const defaultFontFamily = "system-ui, Avenir, Helvetica, Arial, sans-serif";

const colorThemes = [
  { key: "light", label: "A", bg: "#fff", color: "#222" },
  { key: "dark", label: "A", bg: "#222", color: "#fff" },
  { key: "yellow", label: "A", bg: "#ffe066", color: "#222" },
  { key: "blue", label: "A", bg: "#1e40af", color: "#fff" },
];

const minFontSize = 14;
const maxFontSize = 24;
const defaultFontSize = 16;

function loadDyslexicFont() {
  if (!document.getElementById("dyslexic-font-link")) {
    const link = document.createElement("link");
    link.id = "dyslexic-font-link";
    link.rel = "stylesheet";
    link.href = dyslexicFontUrl;
    document.head.appendChild(link);
  }
}

export default function AccessibilityBar() {
  const [fontSize, setFontSize] = useState(() => {
    return parseInt(localStorage.getItem("access-font-size")) || defaultFontSize;
  });
  const [font, setFont] = useState(() => {
    return localStorage.getItem("access-font") || "default";
  });
  const [color, setColor] = useState(() => {
    return localStorage.getItem("access-color") || "light";
  });

  useEffect(() => {
    // Font family
    if (font === "dyslexic") {
      loadDyslexicFont();
      document.documentElement.style.setProperty(
        "--access-font-family",
        dyslexicFontFamily
      );
    } else {
      document.documentElement.style.setProperty(
        "--access-font-family",
        defaultFontFamily
      );
    }
    localStorage.setItem("access-font", font);
  }, [font]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--access-font-size",
      fontSize + "px"
    );
    localStorage.setItem("access-font-size", fontSize);
  }, [fontSize]);

  useEffect(() => {
    let theme = colorThemes.find((t) => t.key === color) || colorThemes[0];
    document.documentElement.style.setProperty("--access-bg", theme.bg);
    document.documentElement.style.setProperty("--access-color", theme.color);
    localStorage.setItem("access-color", color);
  }, [color]);

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        background: "var(--access-bg, #fff)",
        color: "var(--access-color, #222)",
        fontFamily: "var(--access-font-family, system-ui, Avenir, Helvetica, Arial, sans-serif)",
        fontSize: "14px",
        minHeight: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
        padding: "0 1rem",
        gap: "1.5rem",
      }}
    >
      <span style={{ marginRight: 8 }}>Font size</span>
      <button
        aria-label="Decrease font size"
        onClick={() => setFontSize((s) => Math.max(minFontSize, s - 2))}
        style={{ fontWeight: "bold", fontSize: "1.1em", marginRight: 2 }}
        disabled={fontSize <= minFontSize}
      >
        A-
      </button>
      <button
        aria-label="Reset font size"
        onClick={() => setFontSize(defaultFontSize)}
        style={{ fontWeight: "bold", fontSize: "1.1em", marginRight: 2 }}
        disabled={fontSize === defaultFontSize}
      >
        A
      </button>
      <button
        aria-label="Increase font size"
        onClick={() => setFontSize((s) => Math.min(maxFontSize, s + 2))}
        style={{ fontWeight: "bold", fontSize: "1.1em", marginRight: 16 }}
        disabled={fontSize >= maxFontSize}
      >
        A+
      </button>
      <span style={{ marginRight: 8 }}>Font</span>
      <button
        aria-label="Default font"
        onClick={() => setFont("default")}
        style={{
          fontWeight: font === "default" ? "bold" : "normal",
          textDecoration: font === "default" ? "underline" : "none",
          marginRight: 2,
        }}
      >
        R
      </button>
      <button
        aria-label="Dyslexic font"
        onClick={() => setFont("dyslexic")}
        style={{
          fontWeight: font === "dyslexic" ? "bold" : "normal",
          textDecoration: font === "dyslexic" ? "underline" : "none",
          fontFamily: dyslexicFontFamily,
          marginRight: 16,
        }}
      >
        A
      </button>
      <span style={{ marginRight: 8 }}>Site color</span>
      {colorThemes.map((theme) => (
        <button
          key={theme.key}
          aria-label={theme.key + " theme"}
          onClick={() => setColor(theme.key)}
          style={{
            background: theme.bg,
            color: theme.color,
            border: color === theme.key ? "2px solid #333" : "1px solid #ccc",
            borderRadius: 4,
            width: 24,
            height: 24,
            marginRight: 4,
            fontWeight: "bold",
            fontSize: "1em",
            cursor: "pointer",
          }}
        >
          {theme.label}
        </button>
      ))}
    </div>
  );
} 