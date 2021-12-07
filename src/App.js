import "./styles.css";
import { useState, useEffect } from "react";
import ProdList from "./ProdList.js";
// this component is build based on some assumptions, it can vary depending on situation
export default function App() {
  function handleChange(event) {
    // this entire component could also be moved separate and with help of use context searched item can be utilized else where
    let searchedValue = event.target.value;
    setSearchText(searchedValue);
  }

  const [searchText, setSearchText] = useState("");
  const [items, setItemsData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setItemsData(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);
  // conditional rendering
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    var filteredData = items;
    if (searchText.length > 2) {
      //search will get activate at min length 3
      filteredData = items.filter((i) => i.title.indexOf(searchText) > -1);
    }
    return (
      <div className="App">
        <h1>Sample App</h1>
        <input
          onChange={handleChange}
          placeholder="Search title here.."
          title="Search with at-least 3 characters"
        />
        <br />
        <ProdList filteredData={filteredData} />
      </div>
    );
  }
}
