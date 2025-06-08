const Column = (props) => {
  const {columnDetails} = props;
  return (
    <ul>
      <h1>{columnDetails.name}</h1>
    </ul>
  );
};

export default Column;
