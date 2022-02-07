import classes from "./Note.module.scss";

const NoteComponent: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className={classes.note}>
      <h3> {title} </h3>
      {children}
    </div>
  );
};

export default NoteComponent;
