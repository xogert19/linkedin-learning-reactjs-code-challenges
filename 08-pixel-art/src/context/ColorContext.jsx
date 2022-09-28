import React, { useState } from "react";

export const ColorContext = React.createContext();
export const ColorUpdateContext = React.createContext();

export function ColorProvider({ children }) {
  const [color, setColor] = useState("#B9B9B9");

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={color}>
      <ColorUpdateContext.Provider value={updateColor}>{children}</ColorUpdateContext.Provider>
    </ColorContext.Provider>
  );
}
