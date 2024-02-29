import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("hard");
  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <div>
      <h1>React difficulty</h1>
      <div className={s.container}>
        <MenuList
          onItemClick={onMenuListItemClick}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
