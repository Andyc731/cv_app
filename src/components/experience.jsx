function Experience(inputShow, experienceFormData, inputHandler, buttonHandler, submitHandler) {
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