type WindowConfig = {
    PUBLIC_URL: string
    REACT_APP_ENVIRONMENT: string
    REACT_APP_SENTRY_DSN: string
    REACT_APP_KYC_CORE_URL: string
    REACT_APP_TENANT_CONFIG_URL: string
    REACT_APP_GOOGLE_MAP_API_KEY: string
    REACT_APP_GA_DEBUG_MODE: string
    REACT_APP_PAGE_TITLE_PREFIX: string
    REACT_APP_SHOW_MIDDLE_NAME: string
    REACT_APP_DOCUMENT_GENERATOR_URL: string
    REACT_APP_FEEDBACK_URL: string
  }
  
  interface Window {
    config: WindowConfig
  }
  
  interface EnvironmentValues {
    PUBLIC_URL: string
    ENVIRONMENT: string
    SENTRY_DSN: string
    KYC_CORE_URL: string
    TENANT_CONFIG_URL: string
    GOOGLE_MAP_API_KEY: string
    GA_DEBUG_MODE: string
    PAGE_TITLE_PREFIX: string
    SHOW_MIDDLE_NAME: string
    DOCUMENT_GENERATOR_URL: string
    FEEDBACK_URL: string
    isDev: boolean
  }
  
  declare const window: Window
  
  const isDev = ['development', 'test'].includes(process.env.NODE_ENV)
  
  const rawEnv = isDev ? process.env : window.config
  
  const envValues = Object.keys(rawEnv).reduce(
    (a, key) => ({
      ...a,
      [key.replace('REACT_APP_', '')]: rawEnv[key],
    }),
    {}
  ) as EnvironmentValues
  
  export const env = {
    ...envValues,
    isDev,
  }