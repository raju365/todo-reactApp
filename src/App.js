import "./App.css";
import React, { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [listData, setListData] = useState([]);

  function addItems() {
    setListData([...listData, input]);
    console.log(listData);
    setInput("");
  }
  function removeList(i) {
    const updatedListData = listData.filter((e, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }
  function resetList() {
    setListData([]);
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={input}
            placeholder="add a item"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addItems}> + </button>
          <ol>
            {listData !== [] &&
              listData.map((data, i) => {
                return (
                  <>
                    <li key={i}>
                      {data}
                      <button onClick={() => removeList(i)}>-</button>
                    </li>
                  </>
                );
              })}
            {listData.length >= 1 && (
              <button className="resetbtn" onClick={resetList}>
                Reset
              </button>
            )}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
