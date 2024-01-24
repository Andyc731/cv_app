function PageContent (content) {
    return (

    <div className='page'>
        <div className='name'>{content.name}</div>
        <div className='email'>{content.email}</div>
        <div className='phone'>{content.phone}</div>
        {content.education.map((education, index) => (
        <div key={index} className='education'>
            <div>{education.institution}</div>
            <div>{education.degree}</div>
            <div>{education.year}</div>
            <div>{education.description}</div>
        </div>
        )
        )}
        {content.experience.map((experience, index) => (
        <div key={index} className='experience'>
            <div>{experience.workPlace}</div>
            <div>{experience.title}</div>
            <div>{experience.date}</div>
            <div>{experience.description}</div>
        </div>
        )
        )}
    </div>
    )
}

export default PageContent;