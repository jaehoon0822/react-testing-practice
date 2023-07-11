import { Component } from 'react';
import { Props } from './index.types';
import { ToDoItemContainer, TodoItemLabel } from './index.styled';
import { Button } from 'Components/Button';

export default class ToDoItem extends Component<Props> {
  render() {
    const { label, onClickDelete } = this.props;
    return (
      <ToDoItemContainer>
        <TodoItemLabel>{label}</TodoItemLabel>
        <Button label="삭제" backgroundColor="#ff1744" hoverColor="#f01440" onClick={onClickDelete} />
      </ToDoItemContainer>
    );
  }
}
