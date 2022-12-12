import React from 'react'
import { useRef } from 'react'
import {BsCalendarWeek} from 'react-icons/bs'


export default function AddTasks() {
      const inputRef = useRef(null);

      function handleClick(){
        console.log(inputRef.current);
      }



  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mt-4" style={{ color: '#829460' }}>
          Table Todo
        </h1>
        <div className="input-group">
          <input
            type="text"
            id="titleTask"
            ref={inputRef}
            name="titleTask"
            className="form-control"
            placeholder="Add tasks..."
            aria-label="Recipient's username with two button addons"
            style={{color:"#90A17D"}}
          />
          <button className="btn btn-outline-secondary" type="button">
            <BsCalendarWeek />
          </button>
          <button className="btn btn-outline-secondary" type="button"
          onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
