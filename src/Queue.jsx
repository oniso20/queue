import React, { useState } from "react";

function Queue() {
  // Declare a state variable for the queue
  const [queue, setQueue] = useState([]);

  // Declare a state variable for the input field
  const [input, setInput] = useState("");

  // Declare a function to enqueue an item to the queue
  const enqueue = (item) => {
    setQueue([...queue, item]);
    setInput("");
  };

  // Declare a function to dequeue an item from the queue
  const dequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    }
  };

  return (
    <div className="queue">
      <div className="contents">
        <div className="header">
          <h1>Join the Queue</h1>
        </div>
        <div className="instructions">
          <p>
            Enter an item in the input field and click the "Enqueue" button to
            add it to the queue.
          </p>
          <p>
            Click the "Dequeue" button to remove the first item from the queue.
          </p>
          <p>
            A queue is a linear data structure that is open at both ends and the
            operations are performed in First In First Out (FIFO) order.
          </p>
        </div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => enqueue(input)}>Enqueue</button>
        <h3>Queue:</h3>
        <ul>
          {queue.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={() => dequeue()}>Dequeue</button>
      </div>
    </div>
  );
}

export default Queue;
