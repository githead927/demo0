import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

let element = <h1>Component</h1>
console.log(element);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)
