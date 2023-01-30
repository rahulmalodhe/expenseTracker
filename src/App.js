import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import AddExpense from "./Components/Pages/AddExpense";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="expenseManager">
        <Header />
        <Routes>
          <Route path="/expenseTracker" element={<Home />} />
          <Route path="/expenseTracker/addExpense" element={<AddExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
