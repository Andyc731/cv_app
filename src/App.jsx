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
    name: 'Andy Chung',
    email: 'andychc731@gmail.com',
    phone: '555-555-5555',
  });

  const [educationFormData, setEducationFormData] = useState({
    name: '',
    title: '',
    date: ''
  })

  const [experienceFormData, setExperienceFormData] = useState({
    name: '',
    title: '',
    date: ''
  })

  const [pageContent, setPageContent] = useState({
    name: 'Andy Chung',
    email: 'andychc731@gmail.com',
    phone: '555-555-5555',
    education: [],
    experience: []
  });

  const [inputShow, setInputShow] = useState({
    general: true,
    education: true,
    experience: true
  })

  const inputHandler = (event, formType) => {
    const {name, value} = event.target;
    if (formType === 'general') {
      setGeneralFormData((prevForm) => ({
        ...prevForm,
        [name]: value,
      }))
    }
    if (formType === 'education') {
      setEducationFormData((prevForm) => ({
        ...prevForm,
        [name]: value
      }))
    }
    if (formType === 'experience') {
      setExperienceFormData((prevForm) => ({
        ...prevForm,
        [name]: value
      }))
    }
  }

  const submitHandler = (event, formType) => {

    event.preventDefault();

    if (formType === 'general') {
      setPageContent((prevPage) => ({
        ...prevPage,
        name: generalFormData.name,
        email: generalFormData.email,
        phone: generalFormData.phone
      }));
    }

    if (formType === 'education') {
      setPageContent((prevPage) => ({
        ...prevPage,
        education: [...prevPage.education]
      }))
    }

    if (formType === 'experience') {
      setPageContent((prevPage) => ({
        ...prevPage,
        experience: [...prevPage.experience]
      }))
    }
  }
  

  const buttonHandler = (event) => {
    event.target.type === 'button' ? 
    setInputShow(prevShow => ({
      ...prevShow,
      [event.target.name]: true
    }))
    :
    setInputShow(prevShow => ({
      ...prevShow,
      [event.target.name]: false
    }))
  }

  return (
    <>
      <div>
        <form action="" onSubmit={(e) => submitHandler(e, 'general')}>
          {inputShow.general && (
            <div>
              <input 
                type="text"
                name='name'
                value={generalFormData.name}
                onChange={(e) => inputHandler(e, 'general')}
                placeholder='Name'
              />
              <input 
                type="email"
                name='email'
                value={generalFormData.email}
                onChange={(e) => inputHandler(e, 'general')}
                placeholder='Email'
              />
              <input 
                type="tel"
                name='phone'
                value={generalFormData.phone}
                onChange={(e) => inputHandler(e, 'general')}
                placeholder='Phone'
              />
            </div>
          )}
          <button type='button' name='general' onClick={buttonHandler}>Edit</button>
          <button type='submit' name='general' onClick={buttonHandler}>Submit</button>
        </form>
        <form action="" onSubmit={(e) => submitHandler(e, 'education')}>
        {inputShow.education && (
            <div>
              <input 
                type="text"
                name='name'
                value={educationFormData.name}
                onChange={(e) => inputHandler(e, 'education')}
                placeholder='Name'
              />
            </div>
          )}
          <button type='button' name='education' onClick={buttonHandler}>Edit</button>
          <button type='submit' name='education' onClick={buttonHandler}>Submit</button>
        </form>
        <form action="" onSubmit={(e) => submitHandler(e, 'experience')}>
         {inputShow.experience && (
            <div>
              <input 
                type="text"
                name='name'
                value={experienceFormData.name}
                onChange={(e) => inputHandler(e, 'experience')}
                placeholder='Name'
              />
            </div>
          )}
          <button type='button' name='experience' onClick={buttonHandler}>Edit</button>
          <button type='submit' name='experience' onClick={buttonHandler}>Submit</button>
        </form>
        <div className='page'>
          <div className='name'>{pageContent.name}</div>
          <div className='email'>{pageContent.email}</div>
          <div className='phone'>{pageContent.phone}</div>
        </div>
      </div>
    </>
  )
}

export default Form
