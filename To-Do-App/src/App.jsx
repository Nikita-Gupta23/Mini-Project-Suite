import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import EmptyMsg from "./components/EmptyMsg";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const onAddToDo = (itemName, itemDate) => {
    const newTasks = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newTasks);
  };

  const onDelete =(todoName)=>{
    const newList = todoItems.filter((item)=> item.name!=todoName)
    setTodoItems(newList);
  };

  return (
    <>
      <AppName />
      <AddTodo onAddToDo={onAddToDo} />
      {todoItems.length ===0 && <EmptyMsg></EmptyMsg>}
      <TodoItems todoItems={todoItems} handleDel={onDelete} />
    </>
  );
}

export default App;
