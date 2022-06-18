import { useState, useRef } from "react";
import EditInput from "./EditInput";
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

  const onSubmit = (e) => {
    e.preventDefault();
    item.title = editTitleValue;
    setEditToggle(!editToggle);
  };

  const onSubmit2 = (e) => {
    e.preventDefault();
    const nextTodoData = [...todoData, { id: id.current, todo: todoValue }];
    setTodoData(nextTodoData);
    id.current = id.current + 1;
    setTodoValue("");
  };

  return (
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
        <EditInput onSubmit={onSubmit} value={editTitleValue} setValue={setEditTitleValue} />
      )}
      <button onClick={handleDeleteTitle}>XXXX</button>
      <button
        onClick={() => {
          setToggle2(!toggle2);
        }}
      >
        {toggle2 === false ? "취소" : "추가"}
      </button>
      {toggle2 === true ? null : <EditInput onSubmit={onSubmit2} value={todoValue} setValue={setTodoValue} />}
      <ul className="todos">
        {todoData.map((item) => {
          return <TodoItem item={item} handleTodoDelete={handleTodoDelete}></TodoItem>;
        })}
      </ul>
    </ul>
  );
}

export default TodoBox;
