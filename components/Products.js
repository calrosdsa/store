import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'

function Products({id,title,product_image,description,regular_price,slug}) {
    const router=useRouter();
    return (
        <div 
        onClick={()=>router.push(`product/${encodeURIComponent(slug)}`)}
         >
            <h1 className="text-sm">{title}</h1>
            <div className=" mx-2 h-[300px] w-[150px] lg:w-[350px] lg:h-[300px]">
                
        <Image
         src={product_image[0].image} 
         className="object-contain rounded-3xl"
         height={300}
         width={300}
/>
        
      </div>
        </div>
    )
}

export default Products
