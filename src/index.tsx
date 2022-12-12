import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { createBrowserHistory } from 'history'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'animate.css/animate.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-image-crop/dist/ReactCrop.css'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

import { DB_URL } from './config/env';

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