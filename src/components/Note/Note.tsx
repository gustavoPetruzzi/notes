import classes from "./Note.module.scss";

const Note: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className={classes.note}>
      <h1> {title} </h1>
      <p> {content} </p>
    </div>
  );
};

export default Note;
