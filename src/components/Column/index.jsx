import React, { Component } from 'react';
import Item from "../Item/index";
import { Droppable } from "react-beautiful-dnd";

import {Wrapper, Tasklist, Title} from "./style";

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
