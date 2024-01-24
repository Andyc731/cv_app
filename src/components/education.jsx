import { useState } from "react";

function Education({setPageContent, setInputShow, inputShow}) {

    const [educationFormData, setEducationFormData] = useState({
        institution: '',
        degree: '',
        startDate: '',
        endDate: ''
    })
    
    const submitHandler = (event) => {
        event.preventDefault();
    
        setPageContent((prevPage) => ({
            ...prevPage,
            education: [{
                institution: educationFormData.institution,
                degree: educationFormData.degree,
                startDate: educationFormData.startDate,
                endDate: educationFormData.endDate
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
        <div className="input-container">
            <div>

                <input 
                type="text"
                name='institution'
                value={educationFormData.institution}
                onChange={inputHandler}
                placeholder='School'
                />
                <input 
                type="text"
                name='degree'
                value={educationFormData.degree}
                onChange={inputHandler}
                placeholder='Degree'
                />
            </div>
            <div className="date-container">
                <label htmlFor="startDate">Start Date: </label>
                <input 
                type="date"
                name='startDate'
                value={educationFormData.startDate}
                onChange={inputHandler}
                />
                <label htmlFor="endDate">End Date: </label>
                <input 
                type="date"
                name='endDate'
                value={educationFormData.endDate}
                onChange={inputHandler}
                />

            </div>
        </div>
        )}
        <button type='button' name='education' onClick={buttonHandler}>Edit</button>
        <button type='submit' name='education' onClick={buttonHandler}>Submit</button>
    </form>
    );
}

export default Education;