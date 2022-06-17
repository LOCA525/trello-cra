import { useState, useRef } from "react";
import TodoItem from "./TodoItem";

function TodoBox({ item, id, handleTitleDelete }) {
  let [toggle2, setToggle2] = useState(true);
  let [editToggle, setEditToggle] = useState(true);
  let [todoValue, setTodoValue] = useState("");
  let [todoData, setTodoData] = useState([]);
  let [editTitleValue, setEditTitleValue] = useState("");
  const handleDeleteTitle = () => {
    handleTitleDelete(item.id);
  };

  const handleTodoDelete = (id) => {
    const deletedTodoData = todoData.filter((item) => item.id !== id);
    setTodoData(deletedTodoData);
  };

  return (
    <>
      <ul className="todoBox">
        <p
          className="title1"
          onClick={() => {
            setEditToggle(!editToggle);
          }}
        >
          {item.title}
        </p>
        {editToggle === true ? null : (
          <form
            typeof="submit"
            onSubmit={(e) => {
              e.preventDefault();
              item.title = editTitleValue;
              setEditToggle(!editToggle);
            }}
          >
            <input
              placeholder="제목수정"
              value={editTitleValue}
              onChange={(e) => {
                setEditTitleValue(e.target.value);
              }}
            ></input>
          </form>
        )}
        <button onClick={handleDeleteTitle}>XXXX</button>
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
              const nextTodoData = [...todoData, { id: id.current, todo: todoValue }];
              setTodoData(nextTodoData);
              id.current = id.current + 1;
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
            return <TodoItem item={item} handleTodoDelete={handleTodoDelete}></TodoItem>;
          })}
        </ul>
      </ul>
    </>
  );
}

export default TodoBox;
