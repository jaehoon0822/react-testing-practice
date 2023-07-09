import Button from 'components/Button';
import { Container, Contents } from './App.styled';
import useApp from 'components/hooks/useApp';

const App = () => {
  const { onClickAddButton } = useApp();
  return (
    <Container>
      <Contents>
        <Button
          label="추가"
          backgroundColor="#ff1744"
          hoverColor="#f01440"
          onClick={onClickAddButton}
        />
      </Contents>
    </Container>
  );
};

export default App;
