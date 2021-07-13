import { useRouter } from 'next/router';
import Head from 'next/head'
import {useState} from 'react'
import ProductsFeed from '../components/ProductsFeed'
import Header from '../components/Header';
export default function Home({posts, categories}) {
 
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header data={categories}/>
        <ProductsFeed posts={posts} />
    </div>
  )
}
export async function getServerSideProps(){
  const res=await fetch("http://127.0.0.1:8000/api/");
  const posts=await res.json();
  const ress=await fetch("http://127.0.0.1:8000/api/category/")
  const categories=await ress.json();

  return{
    props:{
      posts,
      categories,
    }
  }
}