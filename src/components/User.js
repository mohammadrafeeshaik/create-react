import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, location } = props;

  return (
    <div className="card">
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement count
      </button>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment count
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset count
      </button>
      <h2>UserName: {name}</h2>
      <h3>Location: {location}</h3>
    </div>
  );
};

export default User;
