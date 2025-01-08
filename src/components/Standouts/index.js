import FeatureCard from "../FeatureCard"

const features = [
    {
        image: 'https://res.cloudinary.com/dzhzfdugz/image/upload/v1736331822/waaxvouzquec7zzyjs4k.png',
        title: '500 + Collections',
        description: `Our journey begins with a comprehensive
        understanding of your unique style and space
        requirements.`
    },
    {
        image: 'https://res.cloudinary.com/dzhzfdugz/image/upload/v1736331979/qftufpmymxjgovgzo5n4.png',
        title: '300 + Fabrics',
        description: `Our journey begins with a comprehensive
        understanding of your unique style and space
        requirements.`
    },
    {
        image: 'https://res.cloudinary.com/dzhzfdugz/image/upload/v1736331941/vy3bw2vw4e2ilet9z2cy.png',
        title: 'Top-notch Quality',
        description: `Our journey begins with a comprehensive
        understanding of your unique style and space
        requirements.`
    },
    {
        image: 'https://res.cloudinary.com/dzhzfdugz/image/upload/v1736331947/q22drs4vuugxlcqqbilh.png',
        title: 'Colour and Length Customization',
        description: `Our journey begins with a comprehensive
        understanding of your unique style and space
        requirements.`
    }
]

const Standouts = () => (
    <div className="text-center h-full">
        <h1 className="text-3xl font-bold">Why Vibrer Stands Out?</h1>
        <ul className="flex justify-center items-center flex-wrap px-5 my-2">
            {features.map((feature) => (
                <FeatureCard feature={feature}/>
            ))}
        </ul>
    </div>
)

export default Standouts