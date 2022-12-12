import React from 'react'
import ReactDOM from 'react-dom'
import SentryRRWeb from '@sentry/rrweb'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { createBrowserHistory } from 'history'
import { env } from './config'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'animate.css/animate.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-image-crop/dist/ReactCrop.css'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const history = createBrowserHistory()

Sentry.init({
  dsn: env.SENTRY_DSN,
  normalizeDepth: 10,
  integrations: [
    new SentryRRWeb({ maskAllInputs: false }),
    new Integrations.BrowserTracing({
      tracingOrigins: ['localhost', /^\//],
      routingInstrumentation: Sentry.reactRouterV4Instrumentation(history),
    }),
  ],
  maxBreadcrumbs: 100,
  environment: env.ENVIRONMENT,
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,

  document.getElementById('root')
)

reportWebVitals()