import { useForm } from 'react-hook-form'
import { postTasks } from '../../services/request'
import TableTodo from './Table'

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
    <div className="bg-pink-300 w-full font-mono flex justify-center">
      <div className="w-4/5">
        <form onSubmit={handleSubmit(addData)}>
          {/* Header Text */}
          <h2 className="pt-5 text-center text-3xl text-purple-300">
            To Do List
          </h2>
          {/* input Task */}
          <span className="block mx-2 text-sm font-medium text-purple-300">
            Task name
          </span>
          <input
            type="text"
            placeholder="Add tasks..."
            className=" mt-1 px-3 py-2 bg-white border shadow-sm text-blue-200
             border-blue-100 placeholder-blue-100 focus:outline-none focus:border-blue-200
              focus:ring-blue-200 block w-full rounded-md sm:text-sm focus:ring-1"
            {...register('task', { required: true, maxLength: 80 })}
          />
          {/* input Date */}
          <span className="block mx-2 mt-3 text-sm font-medium text-purple-300">
            Date
          </span>
          <input
            type="date"
            placeholder="yy-mm-dd (2021-10-01)"
            className="mt-1 px-3 py-2 bg-white border shadow-sm text-blue-200
             border-blue-100 placeholder-blue-100 focus:outline-none focus:border-blue-200
              focus:ring-blue-200 block w-full rounded-md sm:text-sm focus:ring-1"
            {...register('date', { required: true, maxLength: 80 })}
          />
          {errors.exampleRequired && <p>This field is required</p>}
          {/* Button add task */}
          <div className="flex justify-center">
            <button
              className="p-2 mt-4 rounded-md  text-white
           bg-red-300 hover:bg-red-400"
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
