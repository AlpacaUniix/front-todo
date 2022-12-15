import { Suspense } from 'react'
import * as Sentry from '@sentry/react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from 'utils/history';
import { Loading } from './components/base/Loading';
import AddTasks from 'components/base/newTask';
import TableTodo from './components/base/Table';


const SentryRoute = Sentry.withSentryRouting(Route)

export default function App () {
  return (
    <Suspense fallback={<Loading initialized={false} />}>
   <Router history={history}>
    <Switch>
      <SentryRoute exact path="/load" component={Loading} />
      <SentryRoute exact path="/addtask" component={AddTasks} />
      <SentryRoute exact path="/table" component={TableTodo} />
       </Switch>
   </Router>
   </Suspense>

  )
}


  