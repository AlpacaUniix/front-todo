import React from 'react'
import { useForm } from 'react-hook-form'
import { postTasks } from 'services'
import TableTodo from './Table'

interface taskProps {
  task?: string
  date?: string | number
}

export default function AddTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const addData = async (data) => {
    console.log(data)

    try {
      if (data !== undefined) {
        await postTasks(data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="bg-blue-200 w-full font-mono flex justify-center">
      <div className='w-4/5'>
        <form onSubmit={handleSubmit(addData)}>
          <h2 className="pt-5 text-center text-3xl text-blue-800">
            To Do List
          </h2>
          <span className="block mx-2 text-sm font-medium text-slate-700">
            Task name
          </span>
          <input
            {...register('task')}
            type="text"
            placeholder="Add tasks..."
            name="addyourtask"
            className=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
             placeholder-slate-400 focus:outline-none focus:border-sky-500
              focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
          <span className="block mx-2 mt-3 text-sm font-medium text-slate-700">
            Date
          </span>
          <input
            {...register('task')}
            type="text"
            placeholder="yy-mm-dd (2021-10-01)"
            name="addyourtask"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
             placeholder-slate-400 focus:outline-none focus:border-sky-500
              focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <div className='flex justify-center'>
          <button
            className="p-2 mt-4 rounded-md  text-white
           bg-purple-300 hover:bg-purple-400"
            type="submit"
          >
            Add
          </button>
          </div>
          
        </form>
        <TableTodo />
      </div>
    </div>
  )
}
