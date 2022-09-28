import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

export function useColor() {
  return useContext(ColorContext);
}
