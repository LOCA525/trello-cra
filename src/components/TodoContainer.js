import TodoBox from "./TodoBox";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoContainer() {
  let [toggle, setToggle] = useState(true);
  let [inputValue, setInputValue] = useState("");

  const [titleData, setTitleData] = useState([]);

  return (
    <>
      <div className="todoContainer">
        {titleData.map((item) => {
          return <TodoBox item={item}></TodoBox>;
        })}

        {toggle === true ? null : (
          <form
            typeof="submit"
            onSubmit={(e) => {
              e.preventDefault();
              const nextTitleData = [...titleData, { title: inputValue, content: [] }];
              setTitleData(nextTitleData);
              setInputValue("");
              setToggle(!toggle);
              console.log(titleData);
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
