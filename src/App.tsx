import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DisplayBook } from './DisplayBook';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const [count, setCount] = useState(0)

  const root = createRoot(document.getElementById("root"))
  
  root.render(
    <Provider store={store}>
      <DisplayBook/>
    </Provider>
  )
}

export default App
