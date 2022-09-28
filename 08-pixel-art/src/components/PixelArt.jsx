import React from "react";
import { ColorProvider } from "../context/ColorContext";
import ColorPicker from "./ColorPicker";
import Pixels from "./Pixels";

export default function PixelArt() {
  return (
    <ColorProvider>
      <ColorPicker />
      <Pixels />
    </ColorProvider>
  );
}
