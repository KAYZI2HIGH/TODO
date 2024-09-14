import { useEffect, useState } from "react";
import TodoFilter from "./components/Filter";
import Header from "./components/Header";
import Todo from "./components/TodoList";

const App = () => {
  const [filter, setFilter] = useState("All");
  const [isCompleted, setIsCompleted] = useState(false);
  const [filteredTodo, setFilteredTodo] = useState([]);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    if (filter === "All") {
      setFilteredTodo(todo);
    } else if (filter === "Active") {
      setFilteredTodo(todo.filter((todos) => !todos.isCompleted));
    } else if (filter === "Completed") {
      setFilteredTodo(todo.filter((todos) => todos.isCompleted));
    }
  }, [todo, filter]);

  return (
    <>
      <div className="container">
        <Header
          todo={todo}
          setTodo={setTodo}
          isCompleted={isCompleted}
        />
        {todo.length ? (
          <>
            <Todo
              todo={filteredTodo.length !== 0 ? filteredTodo : todo}
              setTodo={setTodo}
              setIsCompleted
            />
            <TodoFilter
              setFilter={setFilter}
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="upper-background"></div>
    </>
  );
};

export default App;
