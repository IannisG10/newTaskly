import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store/store.tsx'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
