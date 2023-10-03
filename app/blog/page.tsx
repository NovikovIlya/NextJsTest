import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata={
    title:"Blog|Next App",
}

async function getData(){
    const respone = await fetch('https://jsonplaceholder.typicode.com/postsыы',{
        next:{
            revalidate:60
        }
    })
    if(!respone.ok){
        throw new Error("Unable to fetch!")
    }
    return respone.json()
}

const Blog = async () => {
  const posts = await getData()
  return (
    <>
        <h1 style={{width:"100%"}}> Blog Page</h1>
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>

    </>
  )
}

export default Blog