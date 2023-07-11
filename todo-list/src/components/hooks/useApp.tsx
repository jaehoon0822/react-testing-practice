import { ChangeEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import { TodoItem } from 'components/ToDoItem/ToDoItem.types';

const useApp = () => {
  const [todo, setTodo] = useState<TodoItem | undefined>();
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const onClickAddButton = () => {
    if (todo !== undefined) {
      setTodoList((prev) => [todo, ...prev]);
      setTodo(undefined);
    }
  };

  const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      label: e.target.value,
      key: nanoid(),
    });
  };

  const onDeletTodo = (idx: number) => {
    setTodoList((prev) => {
      const list = [...prev];
      list.splice(idx, 1);
      return list;
    });
  };

  return {
    onClickAddButton,
    onChangeTodo,
    onDeletTodo,
    todo,
    todoList,
  };
};

export default useApp;
