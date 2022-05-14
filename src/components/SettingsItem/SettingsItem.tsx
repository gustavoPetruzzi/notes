import classes from './SettingsItem.module.scss';
const SettingsItem: React.FC<{onClick: () => void, label: string}> = (props) => {
  const {children, onClick, label } = props
  return (
    <div className={classes.settingsItem}onClick={onClick}>
      {children}
      <span> {label} </span>
    </div>
  )
};

export default SettingsItem;