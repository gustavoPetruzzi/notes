import classes from './CloseButton.module.scss';
import CloseIcon from '../../assets/close_icon.png';
const CloseButton: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <div className={classes.container} onClick={props.onClick}>
      <img alt="close icon" src={CloseIcon} />
    </div>
  )
}

export default CloseButton;