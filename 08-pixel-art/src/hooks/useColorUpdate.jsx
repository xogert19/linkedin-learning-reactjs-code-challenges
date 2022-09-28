import { useContext } from "react";
import { ColorUpdateContext } from "../context/ColorContext";

export function useColorUpdate() {
  return useContext(ColorUpdateContext);
}
