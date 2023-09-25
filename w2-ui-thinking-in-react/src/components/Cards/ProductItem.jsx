const ProductItem = ({ image, title, description, price }) => {
    return (
        <div className='flex-1'>
            <div className='border border-gray-400 max-w-20'>
                <div className='p-2'>
                    <img src={image} className='w-40' />
                    <h1 className='overflow-x-hidden'>{title}</h1>
                    <p className='overflow-x-hidden'>{description}</p>
                    <h3 className=''>{price}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
