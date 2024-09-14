import { useState } from "react";

const TodoCard = ({ eachTodo, todo, setTodo }) => {

  const [isCompleted, setIsCompleted] = useState(eachTodo.isCompleted)

  eachTodo.isCompleted = isCompleted;

  const handleDelete = () => {
    setTodo(todo.filter((deleteTodo) => deleteTodo.id !== eachTodo.id))
  }

  return ( <div className="todo-cards">
    <div>
      <input type="checkbox" defaultChecked={eachTodo.isCompleted} onClick={() => {
        setIsCompleted(!isCompleted)
        console.log(eachTodo.isCompleted);
        
      }}/>
      <h3 style={ isCompleted ? ({textDecoration: 'line-through'}) : {}}>{eachTodo.title}</h3>
    </div>
    <button onClick={handleDelete}>
      <img src="/images/icon-cross.svg" alt="" />
    </button>
  </div> );
}
 
export default TodoCard;