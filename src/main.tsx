import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {  Provider} from "react-redux";
import store from './redux/store/store.tsx';
import { BrowserRouter } from 'react-router-dom';

//2.Fournir le store à l'application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </Provider>
  </StrictMode>,
)
