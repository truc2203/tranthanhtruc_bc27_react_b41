import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
const SeatItem = ({ seatItem,seatDetails }) => {
  const [select,setSelect] = useState(false)
  const {isSelect} = useSelector((state) => state.seat)
  const dispatch = useDispatch();
  const handleBooking = (booking) => {
    dispatch({ type: "isBooking", booking });
    setSelect(!select)
  };
  useEffect(() => {
    setSelect(isSelect)
    dispatch({type:'resetSelect'})
  },[isSelect])
  return (
    <button onClick={() => handleBooking(seatItem)} 
        style={{backgroundColor : select ? '#8fee01' : ''}}
        className="seats">
        {seatItem.name} 
    </button>
  );
};

export default SeatItem;
