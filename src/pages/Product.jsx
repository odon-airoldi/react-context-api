import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



export default function Product() {

    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const api_product = `https://fakestoreapi.com/products/${id}`

    // console.log(id)

    useEffect(() => {

        fetch(api_product)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })

    }, [])



    return (

        <div className="container py-5">
            {product === null && 'Pagina non trovata'}

            {product !== null &&
                <div className="row g-5">
                    <div className="col-4">
                        <div className="">
                            <img className="img-fluid" src={product.image} alt={product.title} />
                        </div>
                    </div>
                    <div className="col-8">
                        <small className="text-uppercase">{product.category}</small>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <button className="btn btn-primary">buy for {product.price} €</button>
                    </div>
                </div>
            }
        </div>

    )

}