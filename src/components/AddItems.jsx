import React from "react";

function AddItems({ onChangeHandler, onAddHandler, val }) {
  return (
    <>
      <div className="container d-flex justify-content-between">
        <input
          type="text"
          className="flex-grow-1 rounded-start-2 p-2"
          placeholder="Enter Your Task Here..."
          onChange={onChangeHandler}
          value={val}
        />
        <button
          className="bg-primary p-2 rounded-end-2 text-white fw-bold"
          onClick={onAddHandler}
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default AddItems;
