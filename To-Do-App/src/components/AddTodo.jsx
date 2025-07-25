import { useState } from "react";
function AddTodo({onAddToDo}){
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange=(e)=>{
    setTodoName(e.target.value)
  }

  const handleDateChange=(e)=>{
   setTodoDate(e.target.value)
  }

  const handleAddBtn=()=>{
    onAddToDo(todoName, todoDate)
    setTodoName("");
    setTodoDate("");
  }

    return(
    <div className="container text-center">
    <div className="row row1">
      <div className="col-6">
        <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName}></input>
      </div>
      <div className="col-4">
        <input type="date" onChange={handleDateChange} value={todoDate}></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success btn1" onClick={handleAddBtn}>
        Add
        </button>
      </div>
    </div>
    </div>
    );
}

export default AddTodo;