import { useState } from "react";
import EditInput from "../EditInput";
import "./style.css";

const AddBoardBtn = ({ id, setTitleData, titleData }) => {
  const [toggle, setToggle] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setTitleData([...titleData, { id: id.current, title: inputValue }]);
    id.current = id.current + 1;
    setInputValue("");
    setToggle(!toggle);
  };

  return (
    <div>
      {toggle ? (
        <button
          className="addBoxBtn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          추가
        </button>
      ) : (
        <EditInput onSubmit={onSubmit} value={inputValue} setValue={setInputValue} />
      )}
    </div>
  );
};
export default AddBoardBtn;
