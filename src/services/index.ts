import { env } from "config";

const jsonHeaders = {
    'Content-Type' : 'application/json'
}


const handleStatus = async (res: Response) => {
    const resJson = await res.json()
    if (res.status >= 200 && res.status < 300) {
      return resJson
    }
    throw new Error(JSON.stringify(resJson))
  }

  
