import { useState } from "react";
import { uid } from "uid";

const Header = ({ todo, setTodo, isCompleted}) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    setTodo([
      ...todo,
      {
        id: uid(),
        title: text,
        isCompleted
      },
    ]);
    setText("");
  };

  return (
    <>
      <div className="header">
        <h1>todo</h1>
        <img
          src="../public/images/icon-moon.svg"
          alt=""
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={text}
          className="input-field"
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <input
          type="checkbox"
          className="checkbox"
        />
      </div>
    </>
  );
};

export default Header;
