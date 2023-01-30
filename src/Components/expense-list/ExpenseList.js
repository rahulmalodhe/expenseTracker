import React from "react";
import "./expenseList.css";
import {useSelector} from 'react-redux';
import {ToastContainer, toast} from 'react-toastify';
import Card from "./Card";

const ExpenseList = () => {
  const {expenseList:list,query} = useSelector((state) => state.expenseList);
  const filteredList = list.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
  const notifySuccess = () => toast.success("Expense Deleted")
  console.log(list.length)
  const totalAmt = filteredList.reduce((acc, current) => parseInt(acc) + parseInt(current.amount), 0)
  return (
    <div className="expenseCard">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
      
      {filteredList.length > 0
        ? filteredList.map((item, index) => {
            return <Card key={index} item={item} notifySuccess={notifySuccess}/>;
          })
        :<div className="emptyState">
          <img className="emptyImg" src={require('../../expense-images/empty.png')} alt="Please Add an Expense, Currently NO EXPENSES" />
          <label>List is empty</label>
          </div>}
          <div className="displayTotal">
            <p className="displayAmt">Total Expenses </p>
            <p>&#8377; {totalAmt}</p>
          </div>
    </div>
  );
};

export default ExpenseList;
