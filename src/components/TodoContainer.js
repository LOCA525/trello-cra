import TodoBox from "./TodoBox";
import { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import BoardList from "./BoardList";
import AddBoardBtn from "./AddBoardBtn";

function TodoContainer() {
  const [titleData, setTitleData] = useState([]);
  const id = useRef(0);

  const handleTitleDelete = (id) => {
    const filteredTitle = titleData.filter((item) => item.id !== id);
    setTitleData(filteredTitle);
  };

  return (
    <div className="todoContainer">
      <BoardList titleData={titleData} id={id} handleTitleDelete={handleTitleDelete} />
      <AddBoardBtn id={id} setTitleData={setTitleData} titleData={titleData} />
    </div>
  );
}

export default TodoContainer;
