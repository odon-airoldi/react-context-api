import { useState, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'


export default function Category() {



    const [products, setProducts] = useState([])
    const { category } = useParams()
    const api_products = `https://fakestoreapi.com/products/category/${category}`

    console.log(category)

    useEffect(() => {
        fetch(api_products)
            .then(res => res.json())
            .then(data => {

                setProducts(data)

            })
    }, [])


    return (
        <>
            <main>
                <div className="container py-5">
                    <h1>{category}</h1>

                    <div className="row row-cols-4 g-3">

                        {
                            products.map(product => (

                                <div className="" key={product.id}>
                                    <div className="card h-100">
                                        <Link to={`/products/${product.id}`} className="ratio ratio-1x1">
                                            <img src={product.image} className="card-img-top object-fit-contain img-fluid p-3" alt={product.title} />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description.slice(0, 80)}...</p>
                                            <Link to={`/products/${product.id}`} className="btn btn-primary">buy for {product.price} €</Link>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>
            </main>
        </>
    )

}