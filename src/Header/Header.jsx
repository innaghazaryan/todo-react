const Header = () => {
  return (
    <div className="header">
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Filter todos"
        className="add-todo-input search-input"
      />
    </div>
  );
};

export default Header;
