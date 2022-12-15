import { useState, useEffect } from 'react'
import { getTasks } from '../../services/request'

export default function TableTodo() {
  const [data, setData] = useState([])

  useEffect(() => {
    const addTable = async () => {
      try {
        if (data !== undefined) {
          const tasks = await getTasks()
          setData(tasks)
          console.log(tasks)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }, [])

  return (
    <table className="w-full table-fixed border-collapse border mt-3 
    font-mono bg-green text-purple-300">
      {/* Header Table*/}
      <thead>
        <tr>
          <th className="border-2 p-2 border-teal ">Checklist</th>
          <th className="border-2 p-2 border-teal">Task</th>
          <th className="border-2 p-2 border-teal">Due date</th>
          <th className="border-2 p-2 border-teal">Edit</th>
          <th className="border-2 p-2 border-teal">Delete</th>
        </tr>
      </thead>
      {/* Body Table */}
      <tbody className="w-full">
        <tr>
           {/* Column Checklist */}
          <td className="border-2 p-2 border-teal">
            <div className="flex justify-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-purple-700 bg-gray-100 rounded border-gray-300
         focus:ring-purple-700 dark:focus:ring-purple-800 dark:ring-offset-gray-800 
         focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </td>
          {/* Column task name */}
          <td className="border-2 p-2 border-teal"> </td>
          {/* Column Due date */}
          <td className="border-2 p-2 border-teal"></td>
          {/* Column Edit task */}
          <td className="border-2 p-2 border-teal">
            <div className="flex justify-center">
              <button
                className="p-1  w-1/2 rounded-md bg-yellow-100 text-white hover:bg-yellow-200"
              >
                <i className="bi bi-pencil-square"></i>
              </button>
            </div>
          </td>
          {/* Column Delete task */}
          <td className="border-2 p-2 border-teal">
            <div className="flex justify-center">
              <button
                className="p-1  w-1/2 rounded-md bg-red-100 text-white hover:bg-red-200">
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
