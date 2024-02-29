import s from "./style.module.css";

export function DisplayDifficulty(props) {
  return (
    <div className={s.container}>
      {props.difficulty
        ? `Difficulty set ${props.difficulty}`
        : "Not difficulty set."}
    </div>
  );
}
