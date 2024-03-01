import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export function MenuList(props) {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={props.difficulty === "Easy"}
        onClick={props.onItemClick}
        difficulty="Easy"
      />
      <MenuListItem
        isSelected={props.difficulty === "Medium"}
        onClick={props.onItemClick}
        difficulty="Medium"
      />
      <MenuListItem
        isSelected={props.difficulty === "Hard"}
        onClick={props.onItemClick}
        difficulty="Hard"
      />
      <MenuListItem
        isSelected={props.difficulty === "Insane"}
        onClick={props.onItemClick}
        difficulty="Insane"
      />
    </div>
  );
}
