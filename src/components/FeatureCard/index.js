const FeatureCard = (props) => {
    const {feature} = props
    const {title, description, image} = feature 
    return (
        <li className="w-4/12 flex flex-col justify-end items-center bg-neutral-300 m-3 py-5 rounded-md h-80 text-left px-4">
            <img className="my-3" src={image} alt="feature img"/>
            <div>
                <h3 className="text-xl font-bold my-2">{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default FeatureCard