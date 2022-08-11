import React from "react";
import SeatDetail from "./SeatDetail";
import SeatList from "./SeatList";
import '../css/style.css'
const Movie = () => {
  return (
    <div className="bg-img">
      <div className="text-center my-4">
        <h1>Cyber Movie</h1>
        <div className="py-4">
          <div className="my-2">
            <div
              style={{ display: "inline-block", width: "20px", height: "20px" }}
              className="bg-warning rounded-1"
            ></div>{" "}
            Ghế đã đặt
          </div>
          <div className="my-2">
            <div
              style={{ display: "inline-block", width: "20px", height: "20px" }}
              className="bg-success rounded-1"
            ></div>{" "}
            Ghế đang chọn
          </div>
          <div className="my-2">
            <div
              style={{ display: "inline-block", width: "20px", height: "20px" }}
              className="bg-secondary rounded-1"
            ></div>{" "}
            Ghế trống
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-6">
          <SeatList />
        </div>
        <div className="col-6">
          <SeatDetail />
        </div>
      </div>
    </div>
  );
};

export default Movie;
