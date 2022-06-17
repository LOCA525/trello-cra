function TodoItem({ item, handleTodoDelete }) {
  const handleDeleteTodo = () => {
    handleTodoDelete(item.id);
  };
  return (
    <>
      <button onClick={handleDeleteTodo}>투두지우기</button>
      <div className="todoList">{item.todo}</div>
    </>
  );
}

export default TodoItem;
