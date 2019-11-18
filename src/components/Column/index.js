import React, { Component } from 'react';
import Item from "../Item";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Wrapper = styled.div`
    width: 30%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: cornsilk;
`;
const Title = styled.h2``;
const Tasklist = styled.div`
    width: 90%;
    height: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

let titles = {
  "Column1": "Column 1",
  "Column2": "Column 2",
  "Column3": "Column 3"
}

class Column extends Component {
  render() {
    return (
      <Wrapper>
        <Title>{ titles[this.props.columnId] }</Title>
        <Droppable droppableId={ this.props.columnId }>
          {
            provided => (
              <Tasklist
                ref={ provided.innerRef }
                { ...provided.droppableProps }
              >
                {
                  this.props.items.map(item => <Item key={ item.id } item={ item }/>)
                }
                { provided.placeholder }
              </Tasklist>
            )
            
          }
        </Droppable>
      </Wrapper>
    );
  }
}

export default Column;
