import React, { useState } from "react";
import CircularBadge from "../Badges/CircularButton/CircularBadge/CircularBadge.tsx";
import "./stepper.scss";
import "../Pagination/Pagination.scss";
import classnames from "classnames";
import ButtonDefault from "../Button/DefaultButton/ButtonDefault.tsx";

interface StepperProps {
  phases :  any,
}

const Stepper = ( {phases} : StepperProps) => {

  const [stage, setStage] = useState(0);

  const onClick = (number) => {
    setStage(number)
  };
  return (
    <React.Fragment>
    <div className="stepper-box">
      <div style={{ display: 'flex', flexDirection: 'row'  }}>
        {phases && phases.map((e, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircularBadge content={i} active={i  === stage} />
            <div  style={{ margin : '1rem' }}>
              {phases[i]}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="stepper-buttons" >
    { (stage > 0) && <ButtonDefault text="Previous" onClick={() => onClick(stage - 1)}  className={classnames("prev", { disabled: stage === 0 })}/>}
    { (stage < phases.length - 1) && <ButtonDefault text="Next" onClick={() => onClick(stage + 1)} className={classnames("next", { disabled: stage === phases.length - 1  })}/>}      
    </div>

  </React.Fragment>
  );
};

Stepper.defaultProps = {
  phases : ["Step 1" , "Step 2" , "Step 3"]
}

export default Stepper;
