import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    margin-top: 20px;
  }
`;

export const ColumnWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

`;

export const WelcomeSection = styled.section`
  background: rgba(245,245,245, 0.8);
  width: 50%;
  height: 30%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    margin: 0px;
  }

`;
