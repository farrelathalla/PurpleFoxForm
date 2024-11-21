import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <div style={{fontFamily: 'Helvetica Neue'}}>
    <Router>
      <div className="App">
        {/* Define the routing pages */}
        <Routes>
          {/* Form Page at the root */}
          <Route path="/" element={<FormPage />} />

          {/* Review Page */}
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
