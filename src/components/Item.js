import React, { useState } from "react";

function Item(props) {
  const [done, isDone] = useState(false);

  function mark() {
    isDone(!done);
  }

  return (
    <div>
      <li
        onClick={mark}
        style={{ textDecoration: done ? "line-through" : "none" }}
      >
        {props.todo}
      </li>
    </div>
  );
}

export default Item;
