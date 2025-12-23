import React from "react";
import { Link, Links } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">LeetTrack</h1>
        <p className="hero-subtitle">
          Track your LeetCode problems, monitor progress, and stay consistent.
        </p>

        <div className="hero-buttons">
          <Link to="/dashboard" className="btn primary">
            Go to Dashboard
          </Link>
          <Link to="/problems" className="btn secondary">
            Manage Problems
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>📊 Track Progress</h3>
          <p>See how many Easy, Medium, and Hard problems you’ve solved.</p>
        </div>

        <div className="feature-card">
          <h3>📝 Manage Problems</h3>
          <p>Add, view, and delete LeetCode problems easily.</p>
        </div>

        <div className="feature-card">
          <h3>🎯 Stay Consistent</h3>
          <p>Use stats to stay motivated and build a daily habit.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
