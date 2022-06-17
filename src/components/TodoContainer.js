import TodoBox from "./TodoBox";
import { useState, useRef } from "react";
import TodoItem from "./TodoItem";

function TodoContainer() {
  let [toggle, setToggle] = useState(true);
  let [inputValue, setInputValue] = useState("");

  const [titleData, setTitleData] = useState([]);
  const id = useRef(0);

  const handleTitleDelete = (id) => {
    const filteredTitle = titleData.filter((item) => item.id !== id);
    setTitleData(filteredTitle);
  };

  return (
    <>
      <div className="todoContainer">
        {titleData.map((item) => {
          return <TodoBox item={item} id={id} handleTitleDelete={handleTitleDelete}></TodoBox>;
        })}

        {toggle === true ? null : (
          <form
            typeof="submit"
            onSubmit={(e) => {
              e.preventDefault();
              const nextTitleData = [...titleData, { id: id.current, title: inputValue }];
              setTitleData(nextTitleData);
              id.current = id.current + 1;
              setInputValue("");
              setToggle(!toggle);
            }}
          >
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
            ></input>
          </form>
        )}
        <button
          className="addBoxBtn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          추가
        </button>
      </div>
    </>
  );
}

export default TodoContainer;
