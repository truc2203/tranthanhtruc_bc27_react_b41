import React from 'react'
import { useSelector } from 'react-redux'
const SeatList = () => {
    const {seats} = useSelector((state) => state.seat)
    if(!seats)
    {
        return
    }
  return (
    <>
    <div className='bg-secondary mx-3 text-center mb-4 text-light'>
        <h5>Màn Hình</h5>
    </div>
    <div>
        {seats.map(seat => {
            return (
                <ul className='row-list' key={seat.row}>
                    <li >{seat.row}
                  </li>
                  {seat.seats.map(seats => {
                        return (
                            <button className='seats' key={seats.name}>{seats.name}</button>
                        )
                    })}
                </ul>
            )
        })}
    </div>
    </>
    
  )
}

export default SeatList