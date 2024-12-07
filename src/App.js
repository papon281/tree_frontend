import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NumberInputForm from './components/NumberInputForm';
import PreviousTrees from './components/PreviousTree';
import TreeDisplayPage from "./components/TreeDisplayPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NumberInputForm />} />
        <Route path="/previous-trees" element={<PreviousTrees />} />
        <Route path="/tree-display" element={<TreeDisplayPage />} />
      </Routes>
    </Router>
  );
}

export default App;