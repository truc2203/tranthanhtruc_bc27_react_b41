import React from "react";
import { useSelector,useDispatch } from "react-redux";
const SeatDetail = () => {
  const dispatch = useDispatch((state => state.seat))
  const {seatDetails} = useSelector((state) => state.seat)
  if(!seatDetails)
  {
  console.log(seatDetails)
    return null
  }
  const handleDelete = (seat) => {
    dispatch({type:'isRemove',seat})
  }
  // Tính tổng tiền vé
  const total = seatDetails.reduce((total,value) => {return total += value.price},0)
  
  return (
    <>
      <div className="text-center">
        <h3>Ghế đã chọn</h3>
      </div>
      <table className="table text-light">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {seatDetails.map((seat) => {
            return (
              <tr key={seat.name}>
                <td>{seat.name}</td>
                <td>{seat.price}</td>
                <td>
                  <button
                    className="btn-style"
                    onClick={() => handleDelete(seat)}
                  >
                    Hủy
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h5>Tổng Tiền : {total} VND</h5>
    </>
  );
};

export default SeatDetail;
