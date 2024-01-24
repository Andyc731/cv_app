function Education(inputShow, educationFormData, inputHandler, buttonHandler, submitHandler) {
    

    return (
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
    );
}

export default Education;