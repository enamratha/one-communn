const ProductCategory = (props) => {
    const {cat} = props
    const {name, image} = cat 
    return (
        <div className="w-5/6 bg-neutral-300 p-2 flex flex-col items-center justify-between h-40 rounded-md">
            <h4 className='font-xl font-bold my-3'>{name}</h4>
            <img className="w-8/12" src={image} alt="category"/>
        </div>
    )
}

export default ProductCategory