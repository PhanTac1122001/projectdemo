import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routes/index.routes'
import { Provider } from 'react-redux'
import store from './redux/store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <RouterProvider router={routers} />
    </Provider>
  </StrictMode>,
)