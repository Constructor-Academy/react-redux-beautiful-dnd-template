import React, { Component } from 'react';
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import {Wrapper, Info, ItemTitle, ItemContent} from "./style";


class Item extends Component {
  
  render() {
    return (
      <Draggable draggableId={ this.props.item.id } index={ this.props.item.index }>
        {
          provided => (
            <Wrapper
              { ...provided.draggableProps }
              { ...provided.dragHandleProps }
              ref={ provided.innerRef }
            >
              <Info>
                <ItemTitle>{ this.props.item.title }</ItemTitle>
                <ItemContent>{ this.props.item.description }</ItemContent>
              </Info>
            </Wrapper>
          )
        }
      </Draggable>
    )
  }
}


export default connect()(Item);
