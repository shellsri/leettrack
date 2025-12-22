import React from "react";

const Analytics = ({ problems = [] }) => {
  if (!Array.isArray(problems) || problems.length === 0) {
    return (
      <div className="analytics">
        <h1>Analytics</h1>
        <p>No data yet. Add problems to see analytics.</p>
      </div>
    );
  }

  const total = problems.length;
  const easy = problems.filter(p => p.difficulty === "Easy").length;
  const medium = problems.filter(p => p.difficulty === "Medium").length;
  const hard = problems.filter(p => p.difficulty === "Hard").length;

  const easyPct = Math.round((easy / total) * 100);
  const mediumPct = Math.round((medium / total) * 100);
  const hardPct = Math.round((hard / total) * 100);

  return (
    <div className="analytics">
      <h1>Analytics</h1>

      <div className="analytics-cards">
        <div className="analytics-card">
          <h3>Total Problems</h3>
          <p>{total}</p>
        </div>

        <div className="analytics-card">
          <h3>Easy</h3>
          <p>{easy} ({easyPct}%)</p>
        </div>

        <div className="analytics-card">
          <h3>Medium</h3>
          <p>{medium} ({mediumPct}%)</p>
        </div>

        <div className="analytics-card">
          <h3>Hard</h3>
          <p>{hard} ({hardPct}%)</p>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="insights">
        <h2>Insights</h2>
        <p>
          {hardPct > 40
            ? "You are solving a lot of Hard problems. Great job pushing yourself!"
            : mediumPct > easyPct
            ? "You are focusing more on Medium problems. Try balancing with Easy."
            : "Good balance. Keep increasing difficulty gradually."}
        </p>
      </div>
    </div>
  );
};

export default Analytics;

