import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Items from "./components/Items";
import AddItems from "./components/AddItems";

function App() {
  const [data, setData] = useState([]);

  const [val, setVal] = useState("");

  const onAddHandler = () => {
    // data=[...data,{name:"kumar",age:25}];
    if (val === "") {
      alert("Nothing To Add...");
      return;
    }
    data.includes(val)
      ? alert("Task Already Exits...")
      : setData([val, ...data]);
  };
  const deleteClicked = (value) => {
    let array = data.filter((item) => item !== value);
    setData(array);
  };

  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };
  return (
    <>
      <h1 className="container fw-bold text-center my-5">To DO Manager</h1>
      <div className="container">
        <AddItems
          onAddHandler={onAddHandler}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <h2 className="container text-center my-3 text-warning">
        Your Tasks Goes Here...
      </h2>
      <div className="container">
        {data.length === 0 ? (
          <p className="container text-center bg-warning bg-opacity-25 p-2 rounded-2 fw-bold">
            No Tasks Added...
          </p>
        ) : (
          data.map((ele, idx) => {
            return (
              <Items
                key={idx}
                ele={ele}
                deleteClicked={deleteClicked}
                val={val}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
