import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Education from './components/education'
import General from './components/general'
import Experience from './components/experience'
import PageContent from './components/pageContent'

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

          {General(inputShow, generalFormData, inputHandler, buttonHandler, submitHandler)}

          {Education(inputShow, educationFormData, inputHandler, buttonHandler, submitHandler)}

          {Experience(inputShow, experienceFormData, inputHandler, buttonHandler, submitHandler)}
        </div>
          {PageContent(pageContent)}
      </div>
    </>
  )
}

export default Form
