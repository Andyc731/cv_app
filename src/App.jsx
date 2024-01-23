import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


function Form() {
  const [generalFormData, setGeneralFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [pageContent, setPageContent] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const inputHandler = event => {
    const {name, value} = event.target;
    setGeneralFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const submitHandler = () => {
    setPageContent(prevContent => ({
      ...prevContent,
      name: generalFormData.name,
      email: generalFormData.email,
      phone: generalFormData.phone
    }));
  }

  return (
    <>
      <div>
        <form action="">
          <input 
            type="text"
            name='name'
            value={generalFormData.name}
            onChange={inputHandler}
            placeholder='Name'
          />
          <input 
            type="email"
            name='email'
            value={generalFormData.email}
            onChange={inputHandler}
            placeholder='Email'
          />
          <input 
            type="tel"
            name='phone'
            value={generalFormData.phone}
            onChange={inputHandler}
            placeholder='Phone'
          />
          <button 
            type='button'
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
        <div className='page'>
          <div>
            {pageContent.name}
          </div>
          <div>
            {pageContent.email}
          </div>
          <div>
            {pageContent.phone}
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
