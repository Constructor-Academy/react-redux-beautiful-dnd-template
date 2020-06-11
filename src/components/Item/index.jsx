import React, { Component } from 'react';
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import {Wrapper, Info, InfoItem} from "./style";


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
                <InfoItem>Title: { this.props.item.title }</InfoItem>
                <InfoItem>Description: { this.props.item.description }</InfoItem>
              </Info>
            </Wrapper>
          )
        }
      </Draggable>
    )
  }
}


export default connect()(Item);
