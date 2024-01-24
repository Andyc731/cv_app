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
                key: experienceFormData.key,
                workPlace: experienceFormData.workPlace,
                title: experienceFormData.title,
                date: experienceFormData.date,
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
    )
}

export default Experience;