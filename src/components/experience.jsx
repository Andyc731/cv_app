import { useState } from "react";

function Experience({setPageContent, setInputShow, inputShow}) {

    const [experienceFormData, setExperienceFormData] = useState({
        workPlace: '',
        title: '',
        date: '',
        description: ''
    })

    const submitHandler = (event) => {
        event.preventDefault();
    
        setPageContent((prevPage) => ({
            ...prevPage,
            experience: [{
                workPlace: experienceFormData.workPlace,
                title: experienceFormData.title,
                startDate: experienceFormData.startDate,
                endDate: experienceFormData.endDate,
                description: experienceFormData.description
            }]
        }))
    }

      const inputHandler = (event) => {
        const {name, value} = event.target;

        setExperienceFormData((prevForm) => ({
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
        <h2>Experience</h2>
        {inputShow.experience && (
        <div className="input-container">
            <div>

                <input 
                type="text"
                name='workPlace'
                value={experienceFormData.workPlace}
                onChange={inputHandler}
                placeholder='Company'
                />
                <input 
                type="text"
                name='title'
                value={experienceFormData.title}
                onChange={inputHandler}
                placeholder='Position'
                />
            </div>
            <div className="date-container">
                <label htmlFor="startDate">Start Date: </label>
                <input 
                type="date"
                name='startDate'
                value={experienceFormData.startDate}
                onChange={inputHandler}
                />
                <label htmlFor="endDate">End Date: </label>
                <input 
                type="date"
                name='endDate'
                value={experienceFormData.endDate}
                onChange={inputHandler}
                />

            </div>
            <textarea 
            type="text"
            name='description'
            value={experienceFormData.description}
            onChange={inputHandler}
            placeholder='Responsibility'
            className="description-input"
            />
        </div>
        )}
        <button type='button' name='experience' onClick={buttonHandler}>Edit</button>
        <button type='submit' name='experience' onClick={buttonHandler}>Submit</button>
    </form>
    )
}

export default Experience;