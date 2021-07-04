import { ButtonType } from "../models/button-type";

export const getColor = (buttonType: ButtonType): string => {
  const colors = {
    [ButtonType.Primary] : 'is-primary',
    [ButtonType.Link] : 'is-link',
    [ButtonType.Info] : 'is-info',
    [ButtonType.Success] : 'is-success',
    [ButtonType.Warning] : 'is-warning',
    [ButtonType.Danger] : 'is-danger',
    [ButtonType.Default] : 'is-white',
  };

  return colors[buttonType] || colors[ButtonType.Default];
}