import ProductsFeed from "../../components/ProductsFeed";
import {useRouter} from 'next/router'

export default function Category({posts}){
    const router=useRouter();
    if(router.isFallback){
        <div>s</div>
    }
    return(
        <div>
             {posts.map((post)=>(
         <div className="" onClick={()=>router.push(`../product/${encodeURIComponent(post.slug)}`)}>
           <h1>{post.title}</h1>
           <p>${post.regular_price}</p>
           <img className="h-80 object-contain" 
           src={post.product_image[0].image} title="Image title" alt={post.product_image[0].alt_text} />
         </div>
       ))}
        </div>
    )
}
export async function getServerSidePaths(){
    return{
        paths:[
            {params:{slug:"camisas"}},
        ],fallback:true
    };
}

export async function getServerSideProps({params}){
    const res=await fetch(`http://127.0.0.1:8000/api/category/${params.slug}`);
    const posts=await res.json();
    return{
        props:{
            posts
        }
    }
}
