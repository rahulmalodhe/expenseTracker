import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../Redux/Actions";
import "./topblock.css";
const TopBlock = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value))
  };
  return (
    <div className="topBlock">
      {window.location.pathname === "/expenseTracker/" ? (
        <div className="topFold">
          <div className="searchbar">
            <div>
              <i className="fi fi-rr-search searchIcon"></i>
            </div>
            <div>
              <input
                placeholder="Search Expenses"
                value={query}
                onChange={(e) => handleQuery(e)}
                className="inputField"
              />
            </div>
          </div>
          <Link to="/expenseTracker/addExpense" className="removeHyperLinkStyle">
            <div className="addExpense">
              <div>
                <i className="fi fi-rs-add"></i>
              </div>
              <div>
                <span>Add expense</span>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="expenseBlock">
          <Link to="/expenseTracker/" className="removeHyperLinkStyle">
            <div className="back">
              <i className="fi fi-rr-undo"></i>
              <span>Back</span>
            </div>
          </Link>
          <Link to="/expenseTracker/" className="removeHyperLinkStyle">
            <div className="cancel">
              <i className="fi fi-rr-cross-circle"></i>
              <span>Cancel</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopBlock;
