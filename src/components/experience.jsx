import { useState } from "react";

function Experience({setPageContent, setInputShow, inputShow}) {

    const [experienceFormData, setExperienceFormData] = useState([{
        workPlace: '',
        title: '',
        date: '',
        description: ''
    }])

    const submitHandler = (event) => {
        event.preventDefault();
    
        setPageContent((prevPage) => ({
            ...prevPage,
            experience: experienceFormData
        }))
    }

    const inputHandler = (event, index) => {
        const {name, value} = event.target;

        setExperienceFormData((prevForm) => {
            const updatedForm = [...prevForm]
            updatedForm[index] = {
                ...updatedForm[index],
                [name]: value
            }
            return updatedForm;
        })
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

    const newButtonHandler = () => {
        setExperienceFormData((prevForm) => {
            const updatedForm = [...prevForm]
            updatedForm.push(
                {
                    workPlace: '',
                    title: '',
                    date: '',
                    description: ''
                }
            )
            return updatedForm;
        })
    }

    return (
    <form action="" onSubmit={submitHandler}>
        <h2>Experience</h2>
        {inputShow.experience && (
        <div>
            {experienceFormData.map((experience, index)=> (
                <div key={index} className="input-container">
                    <div>
                        <input 
                        type="text"
                        name='workPlace'
                        value={experience.workPlace}
                        onChange={(e => {inputHandler(e, index)})}
                        placeholder='Company'
                        />
                        <input 
                        type="text"
                        name='title'
                        value={experience.title}
                        onChange={(e => {inputHandler(e, index)})}
                        placeholder='Position'
                        />
                    </div>
                    <div className="date-container">
                        <label htmlFor="startDate">Start Date: </label>
                        <input 
                        type="date"
                        name='startDate'
                        value={experience.startDate}
                        onChange={(e => {inputHandler(e, index)})}
                        />
                        <label htmlFor="endDate">End Date: </label>
                        <input 
                        type="date"
                        name='endDate'
                        value={experience.endDate}
                        onChange={(e => {inputHandler(e, index)})}
                        />
        
                    </div>
                    <textarea 
                    type="text"
                    name='description'
                    value={experience.description}
                    onChange={(e => {inputHandler(e, index)})}
                    placeholder='Responsibility'
                    className="description-input"
                    />
                </div>
            ))}

        </div>
        )}
        <button type="button" name='experience' onClick={newButtonHandler}>New</button>
        <button type='button' name='experience' onClick={buttonHandler}>Edit</button>
        <button type='submit' name='experience' onClick={buttonHandler}>Submit</button>
    </form>
    )
}

export default Experience;