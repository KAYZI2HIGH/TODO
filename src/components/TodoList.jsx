import { Typography, Button } from "@mui/material";
import TodoCard from "./TodoCards";

const Todo = ({ todo, setTodo }) => {

  
  const handleClearCompleted = () => {
    setTodo(todo.filter((completedTodo) => !completedTodo.isCompleted))
  }

  return ( 
    <div className="todos">
      {todo.map((eachTodo) => (
        <TodoCard eachTodo={eachTodo} todo={todo} setTodo={setTodo} key={eachTodo.id}/>
      ))}
      <div className="todo-footer">
        <Typography variant='p'>{todo.length} items left</Typography>
        <Button color='default' onClick={() => {
          handleClearCompleted()
        }
        }>Clear Completed</Button>
      </div>
    </div>
   );
}
 
export default Todo;