import { ChangeEvent, Component } from 'react';
import { Props, State } from './index.types';
import { Container, Contents, InputContainer, ToDoListContainer } from './index.styled';
import Input from 'Components/Input';
import { Button } from 'Components/Button';
import ToDoItem from 'Components/ToDoItem';
import { nanoid } from 'nanoid';

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      toDo: '',
      toDoList: [],
    };
  }

  private onChangeToDo = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      toDo: e.target.value,
    });
  };

  private onClickDelete = (idx: number) => {
    const newToDoList = this.state.toDoList;
    newToDoList.splice(idx, 1);
    this.setState({
      toDoList: newToDoList,
    });
  };

  private onClickAdd = () => {
    if (this.state.toDo !== '') {
      this.setState({
        toDoList: [
          {
            key: nanoid(),
            label: this.state.toDo,
          },
          ...this.state.toDoList,
        ],
        toDo: '',
      });
    }
  };

  render() {
    const { toDo, toDoList } = this.state;
    return (
      <Container>
        <Contents>
          <ToDoListContainer>
            {toDoList.map((item, idx) => (
              <ToDoItem
                key={item.key}
                label={item.label}
                onClickDelete={() => this.onClickDelete(idx)}
              />
            ))}
          </ToDoListContainer>
          <InputContainer>
            <Input
              label="할일"
              name="toDo"
              LabelDisplay="none"
              value={toDo}
              onChange={this.onChangeToDo}
            />
            <Button label="추가" onClick={this.onClickAdd} />
          </InputContainer>
        </Contents>
      </Container>
    );
  }
}
