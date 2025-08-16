import { useState } from 'react';

function Todo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  function btnHandler() {
    if (input.trim() === "") return;
    setList([...list, input]);
    setInput('');
  }

  function dlt() {
    if (list.length === 0) return;
    setList([]);
  }

  function delete_task(position) {
    let newList = [...list];
    newList.splice(position, 1);
    setList(newList);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#333" }}>📝 Todo List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={btnHandler}
        style={{
          padding: "8px 12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>

      <div style={{ marginTop: "20px" }}>
        {list.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <p style={{ margin: 0 }}>{item}</p>
            <button
              onClick={() => delete_task(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      {list.length > 0 && (
        <button
          onClick={dlt}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "darkred",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete Complete List
        </button>
      )}
    </div>
  );
}

export default Todo;
