import TodoItem from "./TodoItem";

function TodoBox({ titleData, item }) {
  return (
    <>
      <ul className="todoBox">
        <p className="title1">{item.content}</p>
        <ul className="todos">
          <TodoItem></TodoItem>
        </ul>
      </ul>
    </>
  );
}

export default TodoBox;
