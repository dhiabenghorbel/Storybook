import React from "react";
import Tooltip from "../../Tooltip/Tooltip.tsx";
import Icon from "../../Icon/Icon.tsx";

interface HomeProps {
  light : boolean
}

const Home = ({light} : HomeProps) => {
  return (
    <div className="flex-row-start cursor-pointer" >
      <Tooltip position="bottom" text="home">
        <Icon name="home" style={{ fontSize: "20px", cursor: "pointer" }} light={light}/>
      </Tooltip>
    </div>
  );
};

Home.defaultProps = {
  light : false
}

export default Home;
