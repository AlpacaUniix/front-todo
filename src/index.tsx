import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { createBrowserHistory } from 'history'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

const history = createBrowserHistory()


ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,

  document.getElementById('root')
)

reportWebVitals()