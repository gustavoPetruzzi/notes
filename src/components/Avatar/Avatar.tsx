import classes from "./Avatar.module.scss";
import defaultImage from "../../assets/default-image.png";
const Avatar: React.FC<{ image?: string; onClick?: () => void }> = (props) => {
  const avatarStyles = {
    backgroundImage: `url(${props.image ? props.image : defaultImage})`,
  };
  return (
    <div
      onClick={props.onClick}
      style={avatarStyles}
      className={classes.avatar}
    ></div>
  );
};

export default Avatar;
