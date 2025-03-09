import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import { routers } from './router/routers.tsx'
import { ThemeProvider } from './provider/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider >
    <Provider store={store}>

   <RouterProvider router={routers} />
    </Provider>
    </ThemeProvider>
  </StrictMode>,
)
