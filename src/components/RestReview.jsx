/* import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview() {
  const [open, setOpen] = useState(false);
  return (
   <>
   <button className='btn btn-warning ms-3' onClick={() => setOpen(!open)}>Click here to see Reviews</button>
   <Collapse in={open}>
   <div className='my-2'>
    <hr/>
    <div className='mt-5'>
        <h6>Name & date:</h6>
        <h6>Rating:</h6>
        <p>Description:</p>
    </div>
   </div>
   </Collapse>
   </>
  )
}

export default RestReview */

import React from 'react';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({selectedRestaurant}) {

  const reviews = selectedRestaurant.reviews;

  const [open, setOpen] = useState(false);

  return (
    <>
      <button className='btn btn-outline-dark rounded shadow border-0 ms-3' style={{ color: "hotpink" }} onClick={() => setOpen(!open)} >
        Reviews <i class="fa-regular fa-eye"></i>
      </button>
      <Collapse in={open}>
        <div className="my-2">
          <hr />
          <div className='mt-5'>
            <h6>{reviews[0].name} -- {reviews[0].date}</h6>
            <h6>{reviews[0].rating}</h6>
            <p>{reviews[0].comments}</p>
          </div>
          {/* <hr /> */}
        </div>
      </Collapse>
    </>
  )
}

export default RestReview;