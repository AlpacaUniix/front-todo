import { createBrowserHistory } from 'history'
import { env } from 'config'

export const history = createBrowserHistory({
  basename: env.PUBLIC_URL,
})

history.listen(() => {
  window.scrollTo(0, 0)
})