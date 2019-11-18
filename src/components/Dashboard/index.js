import React from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../Column";
import styled from "styled-components";
import { connect } from "react-redux";
import { setItems } from "../../store/actions/itemAction";
import { deleteJobFromSourceCol, extractResults, insertJobInDestCol, reArrangeInSameCol } from "./tools";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ColumnWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid black;
`;

const mapStateToProps = ( { itemReducer: { items } } ) => ({
  items
});


export const Dashboard = connect(mapStateToProps)(( { history, dispatch, items } ) => {
  
  
  const onDragEnd = ( result ) => {
    // If item dragged outside of droppable area do nothing
    if(result.destination == null) {
      return;
    }
    
    // Extract drag & drop event data
    let extractedResult = extractResults(result, items)
    let { sourceCol, destCol, jobId, sourceIndex, destIndex, job } = extractedResult
    console.log(sourceCol, destCol, jobId, sourceIndex, destIndex, job)
    
    // If drag and drop inside same droppable area
    if(sourceCol === destCol) {
      var itemsReArranged = reArrangeInSameCol(extractedResult, items)
    } else {
      let newSourceCol = deleteJobFromSourceCol(extractedResult, items)
      let newDestCol = insertJobInDestCol(extractedResult, items)
      var itemsReArranged = {
        ...items,
        [sourceCol]: newSourceCol,
        [destCol]: newDestCol
      }
    }
    dispatch(setItems(itemsReArranged))
  }
  
  return (
    <Wrapper>
      <ColumnWrapper>
        <DragDropContext onDragEnd={ onDragEnd }>
          <Column columnId="Column1" items={ items.Column1 }/>
          <Column columnId="Column2" items={ items.Column2 }/>
          <Column columnId="Column3" items={ items.Column3 }/>
        </DragDropContext>
      </ColumnWrapper>
    </Wrapper>
  );
  
})
