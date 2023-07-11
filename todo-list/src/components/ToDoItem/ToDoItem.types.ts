export interface Props {
  label: string;
  onClickDelete: () => void;
}

export interface TodoItem {
  label: string;
  key: string;
}
