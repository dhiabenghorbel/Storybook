import classnames from "classnames";
import React, { useEffect, useState } from "react";
import "./Pagination.scss";
import TOPICS from "../../app/services/topics";

interface PaginationProps {
  elements : number,
  range : number,
  handleClick :Function,
  fromGpData :boolean,
}

const Pagination = ({ handleClick, elements, range = 99, fromGpData } : PaginationProps) => {
  /*const { subordinates } = useContext(SubordinatesContext);*/
  const [maxNumber, setMaxNumber] = useState(elements);
  const [stage, setStage] = useState(1);

  useEffect(() => {
    /*setMaxNumber(Math.ceil((elements || subordinates.length) / range));*/
    setMaxNumber(elements)
  }, [elements]);

  const onClick = (number) => {
    setStage(number)
    // handleClick to choose the page, commented because no needed in storyBook documentation
    // handleClick(number);     
    if (fromGpData) {
      TOPICS.GP_PAGINATION.next(number);
    }
  };
  let items : any[] = [];
  for (let number = 1; number <= maxNumber; number++) {
    items.push(
      <li key={number}>
        <span href="#" onClick={() => onClick(number)}  className={classnames({ active: number === stage })}>
          {number}
        </span>
      </li>
    );
  }

  return (
    <React.Fragment>
      {maxNumber > 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ul className="pagination modal-4">
            <li>
              <span  onClick={stage > 1 ? () => onClick(stage - 1) : () => { }}  className={classnames("prev", { disabled: stage === 1 })}>
                <i className="fa fa-chevron-left"></i>
              </span>
            </li>
            {items}
            <li>
              <span onClick={stage < maxNumber ? () => onClick(stage + 1) : () => { }} className={classnames("next", { disabled: stage === maxNumber })}>
                <i className="fa fa-chevron-right"></i>
              </span>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

Pagination.defaultProps = {
  elements : 5,
  fromGpData : false
}

export default Pagination;
