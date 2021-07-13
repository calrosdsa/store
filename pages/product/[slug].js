import {useRouter} from 'next/router'
import Head from 'next/head';
function Product({post}){
    const router=useRouter();
    if(router.isFallback){
        return <div></div>
    }
    return(
        <div>
        <Head>
            {post.title}
        </Head>
        <div className="grid-cols-1 m-10  sm:grid sm:grid-cols-4  justify-evenly mt-2" key={post.id}>
                      <img
                        className="col-start-2 h-[200px] md:h-[400px]  object-contain"
                        src={post.product_image[0].image}
                        alt={post.product_image[0].alt_text}
                      />
                      <div className="mt-10 col-start-3 m-10">
                          <h1>{post.title}</h1>
                          <h2 className="font-bold">${post.regular_price}</h2>
                          <p>{post.description              }</p>
                          <p>Next Free Deliver & Returns(Tsc% aply)</p>
                      </div>
                      <button>Add to cart</button>
                  </div>
        </div>
    )
}
export async function getServerSidePaths(){
    return{
    paths:[
        {params:{slug:'camisa-3'}},
    ],
    fallback:true
    };
}

export async function getServerSideProps({params}){
    const res= await fetch(`http://127.0.0.1:8000/api/${params.slug}`)
    const post=await res.json();
    return{
        props:{
            post
        }
    }
}
export default Product;