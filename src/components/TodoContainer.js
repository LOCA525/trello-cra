import TodoBox from "./TodoBox";
import { useState } from "react";

function TodoContainer() {
  let [toggle, setToggle] = useState(true);
  let [inputValue, setInputValue] = useState("");
  const [titleData, setTitleData] = useState([]);
  return (
    <>
      <div className="todoContainer">
        {titleData.map((item) => {
          return <TodoBox titleData={titleData} item={item}></TodoBox>;
        })}

        {toggle === true ? null : (
          <form
            typeof="submit"
            onSubmit={(e) => {
              e.preventDefault();
              const nextTitleData = [...titleData, { content: inputValue }];
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
