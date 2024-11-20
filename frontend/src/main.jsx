
import './index.css'
import App from './App.jsx'

import ReactDOM from 'react-dom/client';

import {BrowserRouter} from  'react-router-dom'
import StoreContexProvider from './context/StoreContex.jsx';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <StoreContexProvider>
 <App/>
 </StoreContexProvider>
  </BrowserRouter>
)
