import { useState } from "react";

function Education({setPageContent, setInputShow, inputShow}) {

    const [educationFormData, setEducationFormData] = useState({
        institution: '',
        degree: '',
        year: '',
    })
    
    const submitHandler = (event) => {
        event.preventDefault();
    
        setPageContent((prevPage) => ({
            ...prevPage,
            education: [{
                key: educationFormData.key,
                institution: educationFormData.institution,
                degree: educationFormData.degree,
                year: educationFormData.year,
            }]
        }))
    }

    const inputHandler = (event, formType) => {
        const {name, value} = event.target;
        setEducationFormData((prevForm) => ({
            ...prevForm,
            [name]: value
        }))
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
    <form action="" onSubmit={submitHandler}>
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
    );
}

export default Education;