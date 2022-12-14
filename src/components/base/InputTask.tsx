import React from 'react'
import { FC, ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction, useEffect } from 'react';

import { BsCalendarWeek } from 'react-icons/bs'
import { getTasks } from 'services/request';

interface taskProps {
  task?: string;
  date?: string | number;
}

export default function AddTask(){

  const [tasks, setTasks] = useState<taskProps[]>([]);

  useEffect(()=>{
    getTasks().then((res) => {
      setTasks(res);
    });
  }, [])

  const addTask = (e: MouseEvent) => {
    e.preventDefault();
    alert(`Add task completed!`)
    
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
            className="form-control"
            placeholder="Add tasks..."
            aria-label="Recipient's username with two button addons"
            style={{ color: '#90A17D' }}
          />
          <button className="btn btn-outline-secondary" type="button">
            <BsCalendarWeek />
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

