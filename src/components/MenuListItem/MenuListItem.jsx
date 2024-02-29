import { useState } from "react";
import s from "./style.module.css";

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
      return "blue";
    } else {
      return "yellow";
    }
  }

  return (
    <div
      onMouseEnter={active}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
      className={s.container}
    >
      Set to: {props.difficulty}
    </div>
  );
};
