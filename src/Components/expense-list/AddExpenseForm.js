import React, { useState } from "react";
import { categories } from "../Constants/add-expenseCategory";
import { useDispatch } from "react-redux";
import { addExpense } from "../../Redux/Actions";
import { ToastContainer, toast } from "react-toastify";
import SucessModal from "./SucessModal";
import "react-toastify/dist/ReactToastify.css";
import "./addExpenseForm.css";

const AddExpenseForm = () => {
const categ = categories;
const [categOpen, setCategOpen] = useState(false);
const [title, setTitle] = useState("");
const [amount, setAmount] = useState();
const [categoryItem, setCategoryItem] = useState();
const dispatch = useDispatch();
const [isopenModal, setIsOpenModal] = useState(false)

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const value = parseFloat(e.target.value);
    if (!NaN) {
      setAmount(e.target.value);
    }
  };

  const handleCategory = (category) => {
    setCategoryItem(category);
    setCategOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !categoryItem) {
      const notify = () => toast("Please Enter a Valid Detail")
      notify()
      return;
    }
    const data = {
      title,
      amount,
      categoryItem,
      createdAt: new Date(),
    };

    dispatch(addExpense(data));
    setIsOpenModal(true)
  };
  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
      <SucessModal openModal={isopenModal} setOpenModal={setIsOpenModal}/>
      <div className="formTitle">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter the expense title"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="formItem">
        <label>Amount Rs.</label>
        <input
          type="text"
          className="amt-input"
          placeholder="Enter the amount"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="formCategory">
        <div className="category">
          <div
            className="categoryDropDown"
            onClick={() => setCategOpen(!categOpen)}
          >
            <label>{categoryItem ? categoryItem.title : "Category"}</label>
            <i className="fi fi-rs-angle-down"></i>
          </div>
          {categOpen && (
            <div className="categoryContainer">
              {categ.map((categItem) => {
                return (
                  <div
                    className="categoryitem"
                    style={{ borderRight: `5px solid ${categItem.color}` }}
                    key={categItem.id}
                    onClick={() => handleCategory(categItem)}
                  >
                    <label>{categItem.title}</label>
                    <img src={categItem.icon} alt="categoryItem"/>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="formatButton">
        <div onClick={() => handleSubmit()}>
          <label>Add</label>
          <i className="fi fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;
