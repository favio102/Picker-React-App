import { useState } from "react";

export const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  function active() {
    setIsHover(true);
  }

  function deactivate() {
    setIsHover(false);
  }

  function getBackgroundColor() {
    if (isHovered) {
      return 'blue';
    } else {
      return 'yellow'
    }
  }

  return (
    <div onMouseEnter={active} onMouseLeave={deactivate} style={{backgroundColor: getBackgroundColor()}}>
      Set to: {props.difficulty}
    </div>
  );
};
