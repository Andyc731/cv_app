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
    institution: '',
    degree: '',
    year: '',
  })

  const [experienceFormData, setExperienceFormData] = useState({
    workPlace: '',
    title: '',
    date: '',
    description: ''
  })

  const [pageContent, setPageContent] = useState({
    name: 'Andy Chung',
    email: 'andychc731@gmail.com',
    phone: '555-555-5555',
    education: [{institution: 'blah', degree: 'blah2', year: 'blah3'}],
    experience: [{workPlace: 'blah', title: 'blah2', date: 'blah3'}]
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
        education: [{
          key: educationFormData.key,
          institution: educationFormData.institution,
          degree: educationFormData.degree,
          year: educationFormData.year,
          description: educationFormData.description
        }]
      }))
    }

    if (formType === 'experience') {
      setPageContent((prevPage) => ({
        ...prevPage,
        experience: [{
          key: experienceFormData.key,
          workPlace: experienceFormData.workPlace,
          title: experienceFormData.title,
          date: experienceFormData.date,
          description: experienceFormData.description
        }]
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
      <div className='container'>
        <div className='form-container'>

          <form action="" onSubmit={(e) => submitHandler(e, 'general')}>
            <h2>General</h2>
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
            <h2>Education</h2>
            {inputShow.education && (
              <div>
                <input 
                  type="text"
                  name='institution'
                  value={educationFormData.institution}
                  onChange={(e) => inputHandler(e, 'education')}
                  placeholder='School'
                />
                <input 
                  type="text"
                  name='degree'
                  value={educationFormData.degree}
                  onChange={(e) => inputHandler(e, 'education')}
                  placeholder='Degree'
                />
                <input 
                  type="text"
                  name='year'
                  value={educationFormData.year}
                  onChange={(e) => inputHandler(e, 'education')}
                  placeholder='Name'
                />
              </div>
            )}
            <button type='button' name='education' onClick={buttonHandler}>Edit</button>
            <button type='submit' name='education' onClick={buttonHandler}>Submit</button>
          </form>
          <form action="" onSubmit={(e) => submitHandler(e, 'experience')}>
            <h2>Experience</h2>
            {inputShow.experience && (
              <div>
                <input 
                  type="text"
                  name='workPlace'
                  value={experienceFormData.workPlace}
                  onChange={(e) => inputHandler(e, 'experience')}
                  placeholder='Company'
                />
                <input 
                  type="text"
                  name='title'
                  value={experienceFormData.title}
                  onChange={(e) => inputHandler(e, 'experience')}
                  placeholder='Position'
                />
                <input 
                  type="text"
                  name='date'
                  value={experienceFormData.date}
                  onChange={(e) => inputHandler(e, 'experience')}
                  placeholder='Name'
                />
                <input 
                  type="text"
                  name='description'
                  value={experienceFormData.description}
                  onChange={(e) => inputHandler(e, 'experience')}
                  placeholder='Responsibility'
                />
              </div>
            )}
            <button type='button' name='experience' onClick={buttonHandler}>Edit</button>
            <button type='submit' name='experience' onClick={buttonHandler}>Submit</button>
          </form>
        </div>
        <div className='page'>
          <div className='name'>{pageContent.name}</div>
          <div className='email'>{pageContent.email}</div>
          <div className='phone'>{pageContent.phone}</div>
          {pageContent.education.map((education, index) => (
            <div key={index} className='education'>
              <div>{education.institution}</div>
              <div>{education.degree}</div>
              <div>{education.year}</div>
              <div>{education.description}</div>
            </div>
          )
          )}
          {pageContent.experience.map((experience, index) => (
            <div key={index} className='experience'>
              <div>{experience.workPlace}</div>
              <div>{experience.title}</div>
              <div>{experience.date}</div>
              <div>{experience.description}</div>
            </div>
          )
          )}
        </div>
      </div>
    </>
  )
}

export default Form
