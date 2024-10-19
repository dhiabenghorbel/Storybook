import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon.tsx";

const DiagnosticCog = (onClick: Function) => {
  const [show, setShow] = useState(true);

  const showEventCallback = (e: any) => {
    if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
      e.preventDefault();
      setShow(prevState => !prevState);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", showEventCallback);
    return () => window.removeEventListener("keydown", showEventCallback);
  }, []);

  return <div >{show && <Icon name="cog" onClick={()=>{}} grey />}</div>;
};

export default DiagnosticCog;
