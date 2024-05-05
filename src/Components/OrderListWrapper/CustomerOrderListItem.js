import React from 'react'

export default function CustomerOrderListItem({name, state, date}) {
  return (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start dark2">
    <div className="d-flex w-100 justify-content-between">
      <div className='d-flex justify-content-between w-75'>
      <h5 className="m-1 p-4 mr-5">{name}</h5>
      <p className="m-1 p-4 rounded border success">{state}</p>
      </div>
      <small className='m-1 p-1 rounded'>{date}</small>
    </div>
  </a>
  )
}
