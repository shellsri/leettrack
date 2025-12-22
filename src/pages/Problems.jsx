import React, { useState } from "react";

const Problems = ({ problems, setproblems }) => {
  const [title, settitle] = useState("");
  const [difficulty, setdifficulty] = useState("Easy");

  // ADD PROBLEM
  const addproblem = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newproblem = {
      id: Date.now(),
      title,
      difficulty,
    };

    setproblems([...problems, newproblem]);
    settitle("");
    setdifficulty("Easy");
  };

  // DELETE PROBLEM
  const deleteproblem = (id) => {
    setproblems(problems.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="heading">
        <h1>Problems Page</h1>
      </div>

      <div>
        <div className="page">
          <div className="modal">
            {/* ADD FORM */}
            <form className="form" onSubmit={addproblem}>
              <input
                type="text"
                placeholder="Problem Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />

              <select
                value={difficulty}
                onChange={(e) => setdifficulty(e.target.value)}
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <button type="submit">Add</button>
            </form>

            {/* PROBLEMS LIST */}
            <div className="problems-list">
              {problems.length === 0 ? (
                <p>No problems added yet.</p>
              ) : (
                problems.map((p) => (
                  <div key={p.id} className="problem-item">
                    <span>
                      {p.title} — {p.difficulty}
                    </span>

                    <button
                      className="delete-btn"
                      onClick={() => deleteproblem(p.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
