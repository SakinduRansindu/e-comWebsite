import React from 'react'
import moment from 'moment'

export default function CustomerOrderListItem({name, state, date, units, price}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: false, 
      timeZone: 'UTC' 
    };
    return date.toLocaleString('en-US', options);
  };

  const colorchange = (s) => {
    if(s === 'pending'){
      return 'bg-warning';
    }
    else if(s === 'delivered'){
      return 'bg-success';
    }
    else if(s === 'cancelled'){
      return 'bg-danger';
    }
  };


  return (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start my-2 mx-auto dark2">
    <div className="d-flex w-80 justify-content-between">
      <div className='d-flex justify-content-between w-75'>
      <h5 className="m-1 px-4 py-2 mr-5">{name}</h5>
      <p className={"m-1 px-4 py-2 rounded text-dark border "+colorchange(state)}>{state}</p>
      </div>
      <small className='m-1 p-1 rounded'>{formatDate(date)}</small>
      <small className='m-1 p-1 rounded'>Units: {units}</small>
      <small className='m-1 p-1 rounded'>Rs.{price}</small>
    </div>
  </a>
  )
}
