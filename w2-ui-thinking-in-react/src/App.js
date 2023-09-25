import { useEffect, useState } from "react"
import { API_URL } from "./constants"
import { ProductItem } from "./components"

const App = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((products) => setProducts(products))
    }, [])

    return (
        <div className='App'>
            <section className='app__container'>
                <h1 class='text-3xl font-bold underline'>Hello world!</h1>
                <div className='app__container__content'>
                    <div className='my-12 mx-4 flex flex-wrap gap-1'>
                        {products.map((product, key) => {
                            const { title, price, description, image } = product
                            return (
                                <ProductItem
                                    key={key}
                                    title={title}
                                    price={price}
                                    description={description}
                                    image={image}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
