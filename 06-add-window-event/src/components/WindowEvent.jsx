import { useEffect } from "react";

const WindowEvent = () => {
  useEffect(() => {
    const doubleClick = () => alert("mouse clicked twice");

    window.addEventListener("dblclick", doubleClick);

    return () => window.removeEventListener("dblclick", doubleClick);
  }, []);

  return <h2>Window event active</h2>;
};

export default WindowEvent;
