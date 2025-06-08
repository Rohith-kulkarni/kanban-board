import Column from '../Column'

const Columns = () => {
  const columnsList = [{name:"To Do"}, {name:"In Progress"}, {name:"Closed"}];
  return (
    <div>
      {columnsList.map((each) => (
        <Column key={each.name} columnDetails={each} />
      ))}
    </div>
  );
};

export default Columns;
