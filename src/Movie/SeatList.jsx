import React from 'react'
import data from './data.json'
const SeatList = () => {
  return (
    <>
    <div className='bg-secondary mx-3 text-center m-4 text-light'>
        <h5>Màn Hình</h5>
    </div>
    <div>
        {data.map(list => {
            return (
                <ul className='row-list' key={list.row}>
                    <li >{list.row}
                  </li>
                  {list.seats.map(seats => {
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