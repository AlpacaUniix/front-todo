import { createBrowserHistory } from 'history'
import { DB_URL } from 'config'
export const history = createBrowserHistory({
  basename: DB_URL,
})

history.listen(() => {
  window.scrollTo(0, 0)
})