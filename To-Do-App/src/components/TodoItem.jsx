
function TodoItem({ todoName, todoDate,handleDel }) {
    
  return (
       <div className="todo-item">
      <div>
        <div><strong>{todoName}</strong></div>
        <div className="todo-date">{todoDate}</div>
      </div>
      <button className="btn btn-danger" onClick={() => handleDel(todoName)}>
        Delete
      </button>
    </div>
    );
  }
  
  export default TodoItem;