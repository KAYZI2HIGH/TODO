const TodoFilter = ({ setFilter }) => {

  const handleClick = (name) => {
    setFilter(name)
  }

  return (
    <div className="todo-filter">
      <div>
        <button
          className="buttons active"
          onClick={() => {
            handleClick("All");
          }}
        >
          All
        </button>
        <button
          className="buttons"
          onClick={() => {
            handleClick("Active");
          }}
        >
          Active
        </button>
        <button
          className="buttons"
          onClick={() => {
            handleClick("Completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
 
export default TodoFilter;