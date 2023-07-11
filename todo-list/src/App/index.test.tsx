import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './index';

jest.mock('nanoid', () => ({ nanoid: () => Math.random() }));
describe('<App />', () => {
  test('renders component correctly', async () => {
    const { container } = render(<App />);

    // toDoList 확인
    const toDoList = screen.getByTestId('todoList');
    expect(toDoList).toBeInTheDocument(); // exist

    // toDoItem 확인
    // -> toDoItem을 직접적으로 확인하기에 testid 작성하지 않음
    //    대신 '삭제' button 유무를 통해 toDoItem 존재 유무 확인
    const toDoItemButton = screen.queryByText('삭제');
    expect(toDoItemButton).toBeNull(); // null

    // input 확인
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();

    // 추가 button 확인
    const label = screen.getByText('추가');
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  test('adds and deletes Todo items', async () => {
    const user = userEvent.setup();
    render(<App />);

    // input 에 study react value 작성
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    await user.type(input, 'study react');

    // 작성된 input 추가
    const addButton = screen.getByText('추가');
    await user.click(addButton);

    // todoItem 확인
    const todoItem = screen.getByText('study react');
    expect(todoItem).toBeInTheDocument();

    // todoItem 삭제
    const deleteButton = screen.getByText('삭제');
    expect(deleteButton).toBeInTheDocument();
    await user.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();

    // todoItem 2개 추가
    await user.type(input, 'study react2');
    await user.click(addButton);
    await user.type(input, 'study react3');
    await user.click(addButton);

    /**** todoItem 개수 확인  ****/

    // 추가한 todoItem 존재확인
    const todoItem2 = screen.getByText('study react2');
    const todoItem3 = screen.getByText('study react3');
    expect(todoItem2).toBeInTheDocument();
    expect(todoItem3).toBeInTheDocument();

    // todoList 안의 toDoItem 갯수 확인
    const todoList = screen.getByTestId('todoList');
    const todoItems = within(todoList).getAllByTestId('toDoItem');
    expect(todoItems.length).toBe(2); // 2개 존재
  });

  test('does not add empty Todo', async () => {
    const user = userEvent.setup();
    render(<App />);

    const todoList = screen.getByTestId('todoList');
    const items = within(todoList).queryAllByTestId('toDoItem');
    const len = items.length;

    // toDoItem 이 전혀 없는 todoList 일때 toDoItme 의갯수
    expect(todoList).toBeInTheDocument();
    expect(len).toBe(0); // 추가된 item 이 없으므로 0

    // 빈 문자열일때 추가
    const addButton = screen.getByText('추가');
    await user.click(addButton);

    // 빈 문자열일때 추가되지 않아야 하므로 0
    expect(len).toBe(0);
  });
});
