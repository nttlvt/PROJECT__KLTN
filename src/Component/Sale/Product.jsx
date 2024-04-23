import React from 'react'
import data from './data.json'
export const Product = () => {
    const product = data
    return (
        <div>
            {
                product.map((value) => {
                    return <div className="card">
                        <img src={ value.image} alt="" />
                        <div className="card-body">
                            <h3>Thanh</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis sint iure dolore rerum distinctio itaque quasi ullam consectetur at. Totam culpa omnis mollitia laudantium nesciunt consectetur beatae facere quas!</p>
                        </div>

                    </div>
                })
            }
        </div>
    )
}
