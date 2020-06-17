import React from 'react';
import Item from "../Item/index";
import { Droppable } from "react-beautiful-dnd";
import {connect} from "react-redux";

import {setItems} from "../../store/actions/itemAction";
import ToDoModal from "../../helpers/ToDoModal";

import {Wrapper, Tasklist, Title, ImgAsBtn, ItemForm} from "./style";
import {AddBtn} from "../../styles/btn";
import addTodoBtn from "../../assets/plus.svg";
import closeModalBtn from "../../assets/minus.svg";

const Column = (props) => {

  const modalRef = React.useRef();

  const [title, setTitle] = React.useState("");
  const [titlePlaceholder, setTitlePlaceholder] = React.useState("...");
  const [content, setContent] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("disabledValue");

  const [columnId] = React.useState(props.id);

  const [itemCounter, setItemCounter] = React.useState(0)

  const handleItem = e => {
    e.preventDefault();
    if(title.length > 0 && selectedValue !== "disabledValue")
    {
      setItemCounter(itemCounter+1);
      const data = {
        "title": title,
        "content": content,
        "status": selectedValue,
        "index": itemCounter
      };
      props.dispatch(setItems(data));
      modalRef.current.closeModal();
      setTitle("");
      setContent("");
      setSelectedValue("disabledValue");
    } else {
      setTitlePlaceholder("PLEASE ADD A TITLE");
      setSelectedValue("disabledValue");
    }
  }

  return (
    <Wrapper>
      <Title>{ props.title }</Title>
      <ImgAsBtn src={addTodoBtn} alt="" onClick={() => modalRef.current.openModal()}/>
      <ToDoModal ref={modalRef}>
        <h1>What is your new item ?</h1>
        <ImgAsBtn src={closeModalBtn} alt="" onClick={() => modalRef.current.closeModal()} />
        <ItemForm onSubmit={handleItem} autocomplete="off">
          <label>Choose your title</label>
          <input 
            type="text"
            className="childForm"
            placeholder={titlePlaceholder}
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
            />
          <label>Choose the content</label>
          <textarea 
            value={content}
            onChange={e => setContent(e.currentTarget.value)}
            className="childForm"
            rows="5"
            ></textarea>
          <label>Choose the column</label>
          <select 
            name="" id="" 
            value={selectedValue}
            onChange={e => setSelectedValue(e.currentTarget.value)}
            className="childForm"
            >
            <option value="disabledValue" disabled>...</option>
            {
              props.columns.map((column, index) => {
                return (
                  <option key={index+1} value={`Column${index+1}`} verif={column}>{column}</option>
                )
              })
            }
          </select>
          <AddBtn onClick={handleItem}>
            Add the new item
          </AddBtn>
        </ItemForm>
      </ToDoModal>
      <Droppable droppableId={ props.columnId }>
        {
          provided => (
            <Tasklist
              ref={ provided.innerRef }
              { ...provided.droppableProps }
            >
              {
                Object.values(props.items).map(element => {
                  return (
                    element ?
                      element
                        .filter(item => item.status === columnId)
                        .map(item => <Item key={ item.id } item={ item }/>)
                    : 
                      null
                  )
                })
              }
              { provided.placeholder }
            </Tasklist>
          )
          
        }
      </Droppable>
    </Wrapper>
  );
  
}

const mapStateToProps = state => ({
  columns: state.columnReducer.columns,
  items: state.itemReducer.items
});

export default connect(mapStateToProps)(Column);
