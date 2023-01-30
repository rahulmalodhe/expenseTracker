import React from "react";
import TopBlock from "./TopBlock";
import AddExpenseForm from "../expense-list/AddExpenseForm";

const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopBlock />
      <AddExpenseForm />
    </div>
  );
};

export default AddExpense;
