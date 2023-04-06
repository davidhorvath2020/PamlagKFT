import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
// http://localhost:3000/Products
export default function HamokDetails() {

    const params = useParams()
    const [products, setProducts] = useState(null)
    console.log(params)

    React.useEffect(() => {
        fetch(`http://localhost:3000/Products/${params.id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [params.id])

    console.log(products)

    return (
        <div>
            <h1>Details: </h1>
            {params.id}
            <div>
                {products ?
                    (
                        <div>{products.type}</div>
                    ) :
                    <h2>Loading</h2>
                }
            </div>
        </div>
    )
}