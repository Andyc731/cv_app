import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Education from './components/education'
import General from './components/general'
import Experience from './components/experience'
import PageContent from './components/pageContent'

function Form() {

  const [pageContent, setPageContent] = useState({
    name: 'Andy Chung',
    email: 'andychc731@gmail.com',
    phone: '555-555-5555',
    education: [{institution: 'blah', degree: 'blah2', startDate: '2013-03-04', endDate: '2014-06-07'}],
    experience: [{workPlace: 'blah', title: 'blah2', startDate: '2013-03-04', endDate: '2014-06-07', description: 'blah5'}]
  });

  const [inputShow, setInputShow] = useState({
    general: true,
    education: true,
    experience: true
  })


  return (
    <>
      <div className='container'>
        <div className='form-container'>

          <General setPageContent={setPageContent} setInputShow={setInputShow} inputShow={inputShow}></General>

          <Education setPageContent={setPageContent} setInputShow={setInputShow} inputShow={inputShow}></Education>

          <Experience setPageContent={setPageContent} setInputShow={setInputShow} inputShow={inputShow}></Experience>
        </div>
          {PageContent(pageContent)}
      </div>
    </>
  )
}

export default Form
