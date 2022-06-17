import { useState } from "react";

function TodoItem({ item, handleTodoDelete }) {
  let [TodoEditToggle, setTodoEditToggle] = useState(true);
  let [todoEditValue, setTodoEditValue] = useState("");

  const handleDeleteTodo = () => {
    handleTodoDelete(item.id);
  };

  return (
    <>
      <button onClick={handleDeleteTodo}>투두지우기</button>
      <div
        className="todoList"
        onClick={(e) => {
          setTodoEditToggle(!TodoEditToggle);
        }}
      >
        {item.todo}
      </div>
      {TodoEditToggle === true ? null : (
        <form
          typeof="submit"
          onSubmit={(e) => {
            e.preventDefault();
            item.todo = todoEditValue;
            setTodoEditToggle(!TodoEditToggle);
          }}
        >
          <input
            placeholder="투두리스트수정"
            onChange={(e) => {
              setTodoEditValue(e.target.value);
            }}
            value={todoEditValue}
          ></input>
        </form>
      )}
    </>
  );
}

export default TodoItem;
