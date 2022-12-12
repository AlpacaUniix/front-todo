import { Suspense } from 'react'
import * as Sentry from '@sentry/react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from 'utils/history';
import { Loading } from './components/base/Loading';
import AddTasks from 'components/base/AddTasks';
import TableTodo from './components/base/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const SentryRoute = Sentry.withSentryRouting(Route)

export default function App () {
  return (
    <Suspense fallback={<Loading initialized={false} />}>
   <Router history={history}>
    <Switch>
      <SentryRoute exact path="/" component={Loading} />
      <SentryRoute exact path="/addtask" component={AddTasks} />
      <SentryRoute exact path="/table" component={TableTodo} />
       </Switch>
   </Router>
   </Suspense>

  )
}


  