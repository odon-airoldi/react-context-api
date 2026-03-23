import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { newtonsCradle } from 'ldrs'
newtonsCradle.register()

export default function Product() {

    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const api_product = `https://fakestoreapi.com/products/${id}`

    // console.log(id)

    useEffect(() => {

        fetch(api_product)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
            .catch(err => {
                navigate('/products')
            })
    }, [])



    return (

        <div className="container py-5">
            {product === null && <l-newtons-cradle size="78" speed="1.4" color="black"></l-newtons-cradle>}

            {
                product !== null &&
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
        </div >

    )

}