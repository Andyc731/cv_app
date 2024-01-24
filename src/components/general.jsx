function General(inputShow, generalFormData, inputHandler, buttonHandler, submitHandler) {
    return (
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
    )
}

export default General;