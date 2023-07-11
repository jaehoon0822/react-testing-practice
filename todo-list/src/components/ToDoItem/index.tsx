import Button from 'components/Button';
import { Label, Container } from './ToDoItem.styled';
// import useTodoItem from 'components/hooks/useTodoItem';
import { Props } from './ToDoItem.types';

const ToDoItem = ({ label, onClickDelete }: Props) => {
  return (
    <Container data-testid="toDoItem">
      <Label>{label}</Label>
      <Button label="삭제" backgroundColor="#ff1744" hoverColor="#f01440" onClick={onClickDelete} />
    </Container>
  );
};

export default ToDoItem;
