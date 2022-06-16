import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoBox({ item }) {
  let [toggle2, setToggle2] = useState(true);
  let [todoValue, setTodoValue] = useState("");
  let [todoData, setTodoData] = useState([]);

  return (
    <>
      <ul className="todoBox">
        <p className="title1">{item.title}</p>
        <button
          onClick={() => {
            setToggle2(!toggle2);
          }}
        >
          {toggle2 === false ? "취소" : "추가"}
        </button>
        {toggle2 === true ? null : (
          <form
            typeof="submit"
            onSubmit={(e) => {
              e.preventDefault();
              const nextTodoData = [...todoData, { todo: todoValue }];
              setTodoData(nextTodoData);
              setTodoValue("");
            }}
          >
            <input
              onChange={(e) => {
                setTodoValue(e.target.value);
              }}
              value={todoValue}
            ></input>
          </form>
        )}
        <ul className="todos">
          {todoData.map((item) => {
            return <TodoItem item={item}></TodoItem>;
          })}
        </ul>
      </ul>
    </>
  );
}

export default TodoBox;
