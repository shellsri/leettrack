import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";   // keep your header
import Home from "./pages/home.jsx";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import Analytics from "./pages/Analytics";

const App = () => {
  const [problems, setproblems] = useState(() => {
    const saved = localStorage.getItem("problems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("problems", JSON.stringify(problems));
  }, [problems]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard problems={problems} />}
        />

        <Route
          path="/problems"
          element={
            <Problems
              problems={problems}
              setproblems={setproblems}
            />
          }
        />

        <Route
          path="/analytics"
          element={<Analytics problems={problems} />}
        />
      </Routes>
    </>
  );
};

export default App;

