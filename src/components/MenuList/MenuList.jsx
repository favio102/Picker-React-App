import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./list";
import s from "./style.module.css";

export function MenuList(props) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => (
        <MenuListItem
          isSelected={props.difficulty === difficulty}
          onClick={props.onItemClick}
          difficulty={difficulty}
        />
      ))}
    </div>
  );
}
