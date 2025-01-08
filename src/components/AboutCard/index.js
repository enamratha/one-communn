const AboutCard = (props) => {
    const {details} = props
    const {title, description} = details 
    return (
        <div className="w-5/12 text-left my-3">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default AboutCard