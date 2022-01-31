import classes from "./Button.module.css";

interface ButtonProps {
  type: "button" | "submit";
  color?: "primary" | "default" | "danger";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, color, children, onClick }) => {
  const colorType = color ? color : "default";
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${classes[colorType]}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
