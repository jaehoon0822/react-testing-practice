import { IToDoItem } from 'Components/ToDoItem/index.types';

export interface State {
  readonly toDo: string;
  readonly toDoList: IToDoItem[];
}

export interface Props {}
