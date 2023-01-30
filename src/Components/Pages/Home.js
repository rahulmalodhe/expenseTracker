import React from "react";
import ExpenseList from "../expense-list/ExpenseList";
import TopBlock from "./TopBlock";

const Home = () => {
  return (
    <div className="home">
      <TopBlock />
      <ExpenseList />
    </div>
  );
};

export default Home;
