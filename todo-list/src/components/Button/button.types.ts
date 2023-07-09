export interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

export interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}
