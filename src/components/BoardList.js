import TodoBox from "./TodoBox";

const BoardList = ({ titleData, id, handleTitleDelete }) => {
  return (
    <div>
      {titleData.map((item) => {
        return <TodoBox item={item} id={id} handleTitleDelete={handleTitleDelete} />;
      })}
    </div>
  );
};
export default BoardList;
