const ProductItem = ({ image, title, description, price }) => {
    return (
        <div className='cards__item'>
            <div className='cards__item__container'>
                <div className='cards__item__container__content'>
                    <img
                        src={image}
                        className='cards__item__container__content__image'
                    />
                    <h1 className='cards__item__container__content__title'>
                        {title}
                    </h1>
                    <p className='cards__item__container__content__description'>
                        {description}
                    </p>
                    <h3 className='cards__item__container__content__price'>
                        {price}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
