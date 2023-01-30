import React from "react";
import moment from "moment";
import {useDispatch} from 'react-redux';
import { removeExpense } from "../../Redux/Actions";
import "./card.css";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch()
  const handleDelete = () =>{
    dispatch(removeExpense(item))
    notifySuccess() 
  }
  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.categoryItem.color}` }}
    >
      <div className="infoContainer">
        <div className="cardImgContainer">
          <img
            className="cardImg"
            src={item.categoryItem.icon}
            alt={item.title}
          />
        </div>
        <div className="cardData">
          <div className="cardinfo">
            <p className="cardTitle">{item.title}</p>
            <p className="cardTime">{time}</p>
          </div>
        </div>
       
      </div>
      <div className="cardRight">
        <div>
          <label className="cardAmt">&#x20B9; {item.amount}</label>
        </div>
        <div className="deleteCard" onClick={handleDelete}>
          <i class="fi fi-rr-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
