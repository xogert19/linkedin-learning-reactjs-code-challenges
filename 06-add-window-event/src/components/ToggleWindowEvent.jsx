import { useState } from "react";
import WindowEvent from "./WindowEvent";

const ToggleWindowsEvent = () => {
  const [windowEvent, setWindowEvent] = useState(false);

  return (
    <div>
      <button onClick={() => setWindowEvent((prevState) => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvent />}
    </div>
  );
};

export default ToggleWindowsEvent;
