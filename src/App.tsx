import { Suspense } from 'react'
import * as Sentry from '@sentry/react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from 'utils/history';
import { Loading } from './components/base/Loading';
import Addlists from './components/Addlists';

const SentryRoute = Sentry.withSentryRouting(Route)

export default function App () {
  return (
    <Suspense fallback={<Loading initialized={false} />}>
   <Router history={history}>
    <Switch>
      <SentryRoute exact path="/" component={Addlists} />
       </Switch>
   </Router>
   </Suspense>

  )
}


  