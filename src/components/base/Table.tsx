import { useState, useEffect } from 'react'
import { getTasks } from '../../services/request'

export default function TableTodo() {
  const [data, setData] = useState(Array)


  console.log(data)
  useEffect(() => {
    const addTable = async () => {
      const tasks = await getTasks()
      console.log(tasks);
      
      setData(tasks)
  }
    addTable()
  }, [])

  return (
    <table className="w-full table-fixed border-collapse border mt-3 font-mono bg-orange text-pink-600">
      {/* Header Table*/}
      <thead>
        <tr>
          <th className="border-2 p-2 border-purple-900 ">Checklist</th>
          <th className="border-2 p-2 border-purple-900">Task</th>
          <th className="border-2 p-2 border-purple-900">Due date</th>
          <th className="border-2 p-2 border-purple-900">Edit</th>
          <th className="border-2 p-2 border-purple-900">Delete</th>
        </tr>
      </thead>
      {/* Body Table */}
      <tbody className="w-full">
        <tr>
           {/* Column Checklist */}
          <td className="border-2 p-2 border-purple-900">
            <div className="flex justify-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 accent-pink-600"
              />
            </div>
          </td>
          {/* Column task name */}
          <td className="border-2 p-2 border-purple-900"> {
            data!==undefined ?
              data.map((item:any) => (
                <div>{item.task}</div>
              ))
            : null
          } </td>
          {/* Column Due date */}
          <td className="border-2 p-2 border-purple-900">{
            data!==undefined ?
              data.map((item:any) => (
                <div>{item.date}</div>
              ))
            : null
          } 
          </td>
          {/* Column Edit task */}
          <td className="border-2 p-2 border-purple-900">
            <div className="flex justify-center">
              <button
                className="p-3  w-16 rounded-md bg-yellow-100 text-white hover:bg-yellow-200"
              >
                <i className="bi bi-pencil-square"></i>
              </button>
            </div>
          </td>
          {/* Column Delete task */}
          <td className="border-2 p-2 border-purple-900">
            <div className="flex justify-center">
              <button
                className="p-3  w-16 rounded-md bg-red-100 text-white hover:bg-red-200">
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
