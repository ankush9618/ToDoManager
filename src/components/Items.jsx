import React, { useRef } from "react";

function Items(props) {
  const textRef = useRef();

  const handleDeleteClick = () => {
    const value = textRef.current.textContent;
    props.deleteClicked(value);
  };
  return (
    <div className="container d-flex justify-content-between rounded-2 bg-success-subtle py-1 my-2">
      <div
        className="col-md-11 col-sm-10 bg-success-subtle py-2 fw-bold"
        ref={textRef}
      >
        {props.ele}
      </div>
      <button
        className="col-md-1 col-sm-2 rounded-2 bg-danger text-white fw-bold px-1"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  );
}

export default Items;
