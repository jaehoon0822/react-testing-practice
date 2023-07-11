import { render, screen } from '@testing-library/react';
import Input from '.';
import userEvent from '@testing-library/user-event';

describe('<Input />', () => {
  test('redners component correctly', () => {
    const { container } = render(<Input defaultValue="test" name="test" />);

    // type 이 text 인 input
    const input = screen.getByDisplayValue('test');

    // 해당 input element 가 document 상에 있는지 확인
    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('redners placeholder correctly', () => {
    render(<Input defaultValue="test" name="test" placeholder="default placeholder" />);
    const input = screen.getByPlaceholderText('default placeholder');

    expect(input).toBeInTheDocument();
  });

  test('change the data', async () => {
    const user = userEvent.setup();
    render(<Input name="test" placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement;

    expect(input).toBeInTheDocument();

    await user.type(input, 'study react');
    expect(input.value).toBe('study react');
  });
});
