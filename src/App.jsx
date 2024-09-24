import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo , editTodo  } from './config/redux/reducers/todoSlice';


const App = () => {

  const todoVal = useRef();

  const dispatch = useDispatch()

  const selector = useSelector(state  => state.todos.todo)
  console.log(selector);
  
  const addToDoInRedux = (e) => {
    e.preventDefault();
    console.log("Todo Added =>", todoVal.current.value);
    dispatch(addTodo({
      title: todoVal.current.value
    }))
    todoVal.current.value = ""
  }

  const deleteItemFromRedux = (index) => {
    console.log("delete" , index);
    dispatch(removeTodo({
      index 
    }))
    
  }

  const editItemFromRedux = (index) => {
    const editValue = prompt('Enter the updated value');
    if (editValue) {
      dispatch(
        editTodo({
          index,
          title: editValue,
        })
      );
    }
  };
  // const editItemFromRedux = (index) => {
  //   const editValue = prompt('Enter the updated value');
  //   if (editValue) {
  //     dispatch(
  //       editTodo({
  //         index,
  //         title: editValue,
  //       })
  //     );
  //   }
  // };


  return (
    <>
      <form>
        <input type="text" ref={todoVal}/>
        <button onClick={addToDoInRedux} type='submit'>Add todo</button>
      </form> 
           {selector.length > 0 ? selector.map((item , index) => {
            return <div key={item.id}>
              <p>{item.title}
              <button onClick={()=> deleteItemFromRedux(index)}>delete</button>
              <button onClick={()=> editItemFromRedux(index)}>edit</button></p>
            </div>
          }) : <h1>No data found</h1>}
    </>
  )
}

export default App