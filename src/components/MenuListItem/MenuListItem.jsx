import { useState } from "react";

export const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  function active() {
    setIsHover(true);
  }

  function deactivate() {
    setIsHover(false);
  }

  console.log('is hovered ', isHovered);

  return <div onMouseEnter={active} onMouseLeave={deactivate}>Set to: {props.difficulty}</div>;
};
