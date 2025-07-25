import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, handleDel}) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name} handleDel={handleDel}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;