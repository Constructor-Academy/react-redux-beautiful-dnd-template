import React, {useState} from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../Column/index";
import { connect } from "react-redux";
import { updateItems } from "../../store/actions/itemAction";
import { deleteJobFromSourceCol, extractResults, insertJobInDestCol, reArrangeInSameCol } from "./tools";
import {addColumn} from "../../store/actions/addColumn";

import {Wrapper, ColumnWrapper, WelcomeSection} from "./style";
import {AddBtn} from "../../styles/btn";
import propulsionLogo from "../../assets/propulsion-academy-logo.png";


const mapStateToProps = ( { itemReducer: { items }, columnReducer: { columns } } ) => ({
  items,
  columns
});


export const Dashboard = connect(mapStateToProps)(( { history, dispatch, items, columns } ) => {
  
  const [columnName, setColumnName] = useState("");
  const [columnPlaceholder, setColumnPlaceholder] = useState("Name of the column")

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
    console.log(itemsReArranged)
    dispatch(updateItems(itemsReArranged))
  }
  
  const handleColumn = (e) => {
    e.preventDefault();
    if(columnName.length > 0 && Object.keys(columns).length < 5)
    {
      dispatch(addColumn(columnName));
      setColumnName("");
    } else if (Object.keys(columns).length === 5) {
      setColumnName("");
      setColumnPlaceholder("5 LISTS MAXIMUM ALLOWED");
    } else {
      setColumnPlaceholder("Please add a valid name");
    }

  }

  return (
    <Wrapper>
      {
        Object.keys(columns).length > 0 ? 
          <>
            <form onSubmit={handleColumn} autoComplete="off">
              <input 
                type="text"
                placeholder={columnPlaceholder}
                value={columnName}
                onChange={e => setColumnName(e.currentTarget.value)}
                />
              <AddBtn onClick={handleColumn}>
                Add
              </AddBtn>
            </form>
            <ColumnWrapper>
              <DragDropContext onDragEnd={ onDragEnd }>
                {
                  columns.map((column, index) => {
                    return (
                      <Column key={index} columnId={`Column${index+1}`} id={`Column${index+1}`} title={column} />
                    )
                  })
                }
              </DragDropContext>
            </ColumnWrapper>
          </>
        :
          <WelcomeSection>
            <a href="https://propulsion.academy/" rel="noopener noreferrer" target="_blank"><img src={propulsionLogo} width="400" alt="Learn how to become a Full-Stack developer with Propulsion Academy"/></a>
            <p><em>No column yet.</em> Please add a new one.</p>
            <form onSubmit={handleColumn} autoComplete="off">
              <input 
                type="text"
                placeholder={columnPlaceholder}
                value={columnName}
                onChange={e => setColumnName(e.currentTarget.value)}
              />
              <AddBtn onClick={handleColumn}>
                Add
              </AddBtn>
            </form>
          </WelcomeSection>
      }
    </Wrapper>
  );
  
})
