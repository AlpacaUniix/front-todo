import { DB_URL } from "config";
import { newTasks } from "../types/interface";

const headers = {
    'Content-Type': 'application/json',
}

const handleStatus = async (res: Response) => {
    const resJson = await res.json()
    if (res.status >= 200 && res.status < 300) {
      return resJson
    }
    throw new Error(JSON.stringify(resJson))
  }

export const getTasks = () => 
   fetch(`${DB_URL}`, {
    method: 'GET',
    headers
    }).then(handleStatus)

export const postTasks = (body: newTasks) =>
  fetch(`${DB_URL}/task`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  }).then(handleStatus)

  export const deleteTasks = () =>
    fetch(`${DB_URL}`, { 
      method: 'DELETE',
      headers,
    }).then(handleStatus)

  export const updateTasks = (body: newTasks) =>
    fetch(`${DB_URL}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    })
      



