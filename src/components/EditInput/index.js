const EditInput = ({ onSubmit, value, setValue }) => {
  return (
    <form typeof="submit" onSubmit={onSubmit}>
      <input
        placeholder="제목수정"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
    </form>
  );
};
export default EditInput;
