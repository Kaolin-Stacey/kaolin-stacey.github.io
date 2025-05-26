import { ReactComponent as WindowSVG } from "../assets/svg/Window.svg";
import React, { useState } from "react";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

export default function Window({ size = "200" }) {
  const [theme, toggleTheme] = useThemeSwitcher();

  const [curtainsOpen, setCurtainsOpen] = useState(true);

  const handleWindowClick = () => {
    toggleTheme();
    setCurtainsOpen((open) => !open);
  };

  const width = Number(size);
  const height = Number(size);

  // Useful dimensions for the curtains
  const curtainWidth = width * 0.35;
  const curtainHeight = height * 0.8;
  const top = height * 0.2;
  const bottom = top + curtainHeight;

  const windowLeft = width * 0.25;
  const windowRight = width * 0.75;

  // Closed curtains (a little farther out)
  const leftClosed = `
  M${windowLeft - curtainWidth * 0.1} ${top} 
  Q${windowLeft - curtainWidth * 0.3} ${top + curtainHeight * 0.3} ${
    windowLeft - curtainWidth * 0.1
  } ${bottom} 
  L${windowLeft + curtainWidth * 0.9} ${bottom} 
  Q${windowLeft + curtainWidth * 0.7} ${top + curtainHeight * 0.5} ${
    windowLeft + curtainWidth * 0.9
  } ${top} 
  Z
`;

  const rightClosed = `
  M${windowRight + curtainWidth * 0.1} ${top} 
  Q${windowRight + curtainWidth * 0.3} ${top + curtainHeight * 0.3} ${
    windowRight + curtainWidth * 0.1
  } ${bottom} 
  L${windowRight - curtainWidth * 0.9} ${bottom} 
  Q${windowRight - curtainWidth * 0.7} ${top + curtainHeight * 0.5} ${
    windowRight - curtainWidth * 0.9
  } ${top} 
  Z
`;

  // Open curtains (a tiny bit closer)
  const leftOpen = `
  M${windowLeft - curtainWidth * 0.3} ${top} 
  Q${windowLeft - curtainWidth * 0.4} ${top + curtainHeight * 0.3} ${
    windowLeft - curtainWidth * 0.3
  } ${bottom} 
  L${windowLeft - curtainWidth * 0.1} ${bottom} 
  Q${windowLeft - curtainWidth * 0.2} ${top + curtainHeight * 0.5} ${
    windowLeft - curtainWidth * 0.1
  } ${top} 
  Z
`;

  const rightOpen = `
  M${windowRight + curtainWidth * 0.3} ${top} 
  Q${windowRight + curtainWidth * 0.4} ${top + curtainHeight * 0.3} ${
    windowRight + curtainWidth * 0.3
  } ${bottom} 
  L${windowRight + curtainWidth * 0.1} ${bottom} 
  Q${windowRight + curtainWidth * 0.2} ${top + curtainHeight * 0.5} ${
    windowRight + curtainWidth * 0.1
  } ${top} 
  Z
`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={size}
      height={size}
      onClick={handleWindowClick}
      style={{ cursor: "pointer" }}
      aria-label="Window with curtains"
    >
      <WindowSVG />

      {/* Left curtain */}
      <path
        d={curtainsOpen ? leftOpen : leftClosed}
        fill="#DDA15E"
        stroke="#BC6C25"
        strokeWidth={width * 0.015}
      />

      {/* Right curtain */}
      <path
        d={curtainsOpen ? rightOpen : rightClosed}
        fill="#DDA15E"
        stroke="#BC6C25"
        strokeWidth={width * 0.015}
      />
    </svg>
  );
}
