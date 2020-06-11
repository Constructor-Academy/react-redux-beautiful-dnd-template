import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ColumnWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid black;
`;