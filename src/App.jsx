import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Problems from './pages/Problems.jsx';
import Analytics from './pages/Analytics.jsx';

const App = () => {
  const [problems, setproblems] = useState([]);

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Dashboard problems={problems} />} />

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
    </div>
  );
};

export default App;
