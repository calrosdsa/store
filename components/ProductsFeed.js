import React,{useState,useRouter} from 'react'
import Products from './Products'


function ProductsFeed({posts}) {

    return (
        <div className=" overflow-x-auto   ">

        <div className="flex lg:grid lg:grid-cols-5 ">
            {posts.map(({id,title,product_image,description,regular_price,slug})=>(
                <Products
                key={id}
                id={id}
                title={title}
                product_image={product_image}
                regular_price={regular_price}
                slug={slug}
                />
                ))}
        </div>
                </div>
    )
}

export default ProductsFeed
