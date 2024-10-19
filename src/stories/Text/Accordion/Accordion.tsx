import React, { ReactNode, useState } from "react";
import SubTitle from "../Subtitle/Subtitle.tsx";

interface AccordionProps {
  id: string;
  children?: ReactNode;
}

const Accordion = ({ id, children }: AccordionProps) => {
  const [showElement, setShowElement] = useState(true);

  return (
    <div>
      <SubTitle id={id} help onClick={() => setShowElement(prev => !prev)} showElement={showElement} notTranslated />
      {showElement && children}
    </div>
  );
};

Accordion.defaultProps = {
  children: <React.Fragment > {"Text"} </React.Fragment>,
  id: "Title"
};

export default Accordion;
