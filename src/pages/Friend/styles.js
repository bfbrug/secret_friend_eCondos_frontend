import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background-color: #f8c336;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: #333;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    color: #333;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 20px;
    }
  }
`;
