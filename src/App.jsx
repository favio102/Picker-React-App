import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";

export function App() {
  return (
    <div>
      <h1>React difficulty</h1>
      <div className={s.container}>
        <MenuList difficulty="easy" />
        <DisplayDifficulty difficulty="easy" />
      </div>
    </div>
  );
}
