import { useState, useEffect } from 'react'

export default function Products() {

    const api_products = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(api_products)
            .then(res => res.json())
            .then(data => {

                setProducts(data)

            })
    }, [])

    console.log(products)


    return (
        <>
            <main>
                <div className="container py-5">
                    Products
                </div>
            </main>
        </>
    )

}