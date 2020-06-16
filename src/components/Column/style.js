import styled from "styled-components";

export const Wrapper = styled.div`
    width: 19%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #fff; 
    border-radius: 10px;
`;

export const Tasklist = styled.div`
    width: 90%;
    height: 90%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2``;

export const ImgAsBtn = styled.img`
    width: 40px;
`;

export const ItemForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 80%;

    > .childForm {
        margin-bottom: 20px;
        width: 100%;
    }

    textarea {
        border-radius: 5px;
        background-color: rgb(252, 252, 252);
        border: 1px solid grey;
        resize: none;
        padding: 10px;
    }
`;