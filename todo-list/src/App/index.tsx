import Button from 'components/Button';
import { Container, Contents, InputContainer, ToDoListContainer } from './App.styled';
import useApp from 'components/hooks/useApp';
import Input from 'components/Input';
import ToDoItem from 'components/ToDoItem';
import { TodoItem } from 'components/ToDoItem/ToDoItem.types';

const App = () => {
  const { onClickAddButton, onChangeTodo, todo, todoList, onDeletTodo } = useApp();
  return (
    <Container>
      <Contents>
        <ToDoListContainer data-testid="todoList">
          {todoList.map((item: TodoItem, idx: number) => {
            return (
              <ToDoItem key={item.key} label={item.label} onClickDelete={() => onDeletTodo(idx)} />
            );
          })}
        </ToDoListContainer>
        <InputContainer>
          <Input
            placeholder="할 일을 입력해 주세요"
            value={todo?.label ?? ''}
            name="todo"
            onChange={onChangeTodo}
          />
          <Button label="추가" onClick={onClickAddButton} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default App;
