import styled from "styled-components";

export const Wrapper = styled.div`
    width: 90%;
    margin-bottom: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius:10px;
    background-color: white;
    border: 2px solid lightgrey;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.25);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemTitle = styled.h4`
   font-weight: bold;
   text-decoration: underline;
   margin-bottom: 5px;
`;

export const ItemContent = styled.p`
  margin-top: 0px;
`;