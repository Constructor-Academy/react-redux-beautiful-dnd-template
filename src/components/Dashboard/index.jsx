import React from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../Column/index";
import { connect } from "react-redux";
import { setItems } from "../../store/actions/itemAction";
import { deleteJobFromSourceCol, extractResults, insertJobInDestCol, reArrangeInSameCol } from "./tools";

import {Wrapper, ColumnWrapper} from "./style";


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
    let itemsReArranged = null;
    // If drag and drop inside same droppable area
    if(sourceCol === destCol) {
      itemsReArranged = reArrangeInSameCol(extractedResult, items)
    } else {
      let newSourceCol = deleteJobFromSourceCol(extractedResult, items)
      let newDestCol = insertJobInDestCol(extractedResult, items)
      itemsReArranged = {
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
