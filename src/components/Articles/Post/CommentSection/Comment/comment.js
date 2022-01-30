import css from "../../../articles.module.css"
function Comment({name,text}) {
  return (
    <div className={css.Comment}>
      <h4>{name} says:</h4>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
