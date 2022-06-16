function TodoItem({ item }) {
  return (
    <>
      <div className="todoList">{item.todo}</div>
    </>
  );
}

export default TodoItem;
