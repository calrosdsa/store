   
    const [keyword,setKeyword]=useState('');
  const router=useRouter();
  const filterProduct=posts.filter(post=>post.title.toLowerCase().includes(keyword)
  || post.description.toLowerCase().includes(keyword)
  )
  const handlerFilter=(e)=>{
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
  }
   
   
   
   
   <div className=" lg:grid lg:grid-cols-6 mt-10">
     {filterProduct <1?(<div>No hay coincidencias</div>):(
    filterProduct.map((post)=>(
      <div key={post.id} onClick={()=>router.push(`product/${encodeURIComponent(post.slug)}`)}>
        <h1>{post.title}</h1>
        <img className="h-64" src={post.product_image[0].image} alt="" />
        <h1>{post.regular_price}</h1>
        <h2>{post.dicount_price}</h2>
        <p>{post.description}</p>
        
      </div>
    )))}