import React, { Component } from 'react';
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

const Wrapper = styled.div`
    width: 90%;
    margin-bottom: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: white;
    border: 1px solid black;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const InfoItem = styled.div`
   padding: 2px;
`;


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
