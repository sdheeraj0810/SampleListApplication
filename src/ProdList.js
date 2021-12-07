import "./styles.css";
// dynamic listing component
const ProdList = (props) => {
  if (props.filteredData.length > 0) {
    let headers = [];
    for (let itemHeader in props.filteredData[0]) {
      headers.push(<th>{itemHeader}</th>);
    }

    let rows = [];
    props.filteredData.map((itemRow) => {
      var colData = [];
      for (let itemCol in itemRow) {
        colData.push(<td>{itemRow[itemCol]}</td>);
      }
      rows.push(<tr>{colData}</tr>);
    });

    return (
      <div>
        No of records: {rows.length}
        <table>
          <thead>{headers}</thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  } else {
    return <span>No data found..</span>;
  }
};
export default ProdList;
