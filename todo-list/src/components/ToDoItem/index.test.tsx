import { render, screen } from '@testing-library/react';
import ToDoItem from '.';
import userEvent from '@testing-library/user-event';

describe('<ToDoItem />', () => {
  test('redners component correctly', () => {
    const fn = jest.fn();
    const { container } = render(<ToDoItem label="default value" onClickDelete={fn} />);

    // toDoItme Label 이 있는지 확인
    const item = screen.getByText('default value');
    expect(item).toBeInTheDocument();

    // toDoItem 삭제 버튼 확인
    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  test('click the onDelete', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<ToDoItem label="default value" onClickDelete={handleClick} />);

    // delete button test
    const deleteButton = screen.getByText('삭제');
    expect(handleClick).toBeCalledTimes(0);
    await user.click(deleteButton);
    expect(handleClick).toBeCalledTimes(1);
  });
});
