const AddTodo = () => {
  return (
    <form className="add-todo-form">
      <input type="text" placeholder="Add Todo" className="add-todo-input" />
      <button className="item-button edit-button">Add Task</button>
    </form>
  );
};

export default AddTodo;
