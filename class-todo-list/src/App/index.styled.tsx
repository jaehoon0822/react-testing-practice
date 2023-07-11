import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border-radius: 4px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  padding: 1rem;
  box-shadow: 10px 10px 20px #bdbdbd;
`;

export const ToDoListContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 1rem;
  border: 1px solid #bdbdbd;
  overflow-y: scroll;
`;

export const InputContainer = styled.div`
  display: flex;
`