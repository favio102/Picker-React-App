import s from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";

export function MenuList(props) {
  return (
    <div className={s.container}>
      <MenuListItem onClick={props.onItemClick} difficulty='Easy'/>
      <MenuListItem onClick={props.onItemClick} difficulty='Medium'/>
      <MenuListItem onClick={props.onItemClick} difficulty='Hard'/>
      <MenuListItem onClick={props.onItemClick} difficulty='Insane'/>
    </div>
  );
}
