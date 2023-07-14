import styled from "styled-components";


export const ButtonWish = styled.button`
  text-transform: uppercase;
  min-width: 50%;
  height: 42px;
  border: 1px solid #efbae1;
  font-weight: 500;
  text-align: center;
  padding: 0 15px;
  transition: all 0.25s linear 0s;
  margin: 5px;

  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  @media (max-width: 500px) {
    margin-bottom: 8px;
  }
`;