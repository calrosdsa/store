import React from 'react'
import {useRouter} from 'next/router'
function Header({data,posts}) {
    const router=useRouter();
    return (
        <div>
            {data.map((category)=>(
            <div key={category.name} onClick={()=>router.push(`/category/${encodeURIComponent(category.slug)}`)}>
                <a>{category.name}</a>
            </div>
            ))}
        </div>
    )
}

export default Header
