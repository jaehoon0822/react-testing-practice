import { render, screen } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import Button from '.';
import userEvent from '@testing-library/user-event';

expect.extend(matchers);

describe('<Button />', () => {
  test('renders component correctly', async () => {
    // test 라는 이름을 가진 button render
    const { container } = render(<Button label="test" />);

    // test button 있는지 확인
    const label = screen.getByText('test');
    expect(label).toBeInTheDocument();

    // container element 선택
    const buttonContainer = screen.getByTestId('container');
    expect(buttonContainer).toBeInTheDocument();

    // button 상태에 따른 background-color 확인

    // hover 이전
    expect(buttonContainer).toHaveStyleRule('background-color', '#304ffe');
    // hover 이후
    expect(buttonContainer).toHaveStyleRule('background-color', '#1e40ff', { target: ':hover' });

    expect(container).toMatchSnapshot();
  });

  test('changes backgroundColor and hoveColor props', () => {
    // 기본 배경색상
    const backgroundColor = '#ff1744';
    // hover 되었을시 배경색상
    const hoverColor = '#f01440';

    // button component render
    render(<Button label="test" backgroundColor={backgroundColor} hoverColor={hoverColor} />);

    // 버튼 컨테이너 가져오기
    const buttonContainer = screen.getByTestId('container');
    expect(buttonContainer).toBeInTheDocument();

    // 버튼 container backgroundColor 확인
    expect(buttonContainer).toHaveStyleRule('background-color', backgroundColor);

    // 버튼 hover 시 backgroundColor 확인
    expect(buttonContainer).toHaveStyleRule('background-color', hoverColor, { target: ':hover' });
  });

  test('clicks the button', async () => {
    const user = userEvent.setup();

    // mock fn 생성
    const handleClick = jest.fn();

    // button 에 onClick event 로 mock fn 설정
    render(<Button label="test" onClick={handleClick} />);

    // onClick event 가 일어날 Element
    const buttonContainer = screen.getByTestId('container');

    // --> toHaveBeenCalledTimes 는 함수가 몇번 호출되었는지 확인하는 expect method.
    //
    // mock fn 이 몇번 클릭되었는지 확인: 0번
    expect(handleClick).toHaveBeenCalledTimes(0);

    // user.click 이벤트를 사용하여 해당 Element 클릭
    await user.click(buttonContainer);

    // mock fn 이 몇번 클릭되었는지 확인: 1번
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
