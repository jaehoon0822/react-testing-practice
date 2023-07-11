export interface Props {
  readonly label?: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

export interface StyledButtonProps extends Pick<Props, 'backgroundColor' | 'hoverColor'> {}
