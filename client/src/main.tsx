import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StylesGlobal } from './styles/StylesGlobal.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './queries/queryClient.ts'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <StyleSheetManager shouldForwardProp={(prop: string) => isPropValid(prop)}>
          <App />
          <StylesGlobal />
        </StyleSheetManager>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
