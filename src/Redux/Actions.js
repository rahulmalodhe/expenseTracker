import { ADD_EXPENSE } from "./ActionType";
import { DELETE_EXPENSE } from "./ActionType";
import { SEARCH_EXPENSE } from "./ActionType";

export const addExpense = (data) => {
  console.log("This is the expense data",data)
  return {
    type: ADD_EXPENSE,
    data,
  };
};
export const removeExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data,
  };
};
export const searchExpense = (query) => {
  return {
    type: SEARCH_EXPENSE,
    query,
  };
};
