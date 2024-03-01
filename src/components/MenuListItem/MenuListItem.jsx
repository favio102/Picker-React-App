import { useState } from "react";
import s from "./style.module.css";

export const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  const active = () => {
    setIsHover(true);
  }

  const deactivate = () => {
    setIsHover(false);
  }

  const getBackgroundColor = () => {
    if (isHovered) {
      return "orange";
    } else {
      if (props.isSelected) {
        return "orange";
      } else {
        return "blue";
      }
    }
  };

  const onItemClick = () => {
    props.onClick(props.difficulty);
  };

  return (
    <div
      onClick={onItemClick}
      className={s.container}
      onMouseEnter={active}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to: {props.difficulty}
    </div>
  );
};
