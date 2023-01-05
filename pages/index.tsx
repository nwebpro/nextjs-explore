import Link from 'next/link';
import Meta from '../Components/Meta/Meta'

const Home = ({ posts }: any) => {
    return ( 
        <>
            <Meta 
                title='Home - Next Js App Explore'
            />
            <div>
                {
                    posts.map((post: any) => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <Link href='/blogs/[blogId]' as = {`/blogs/${post.id}`}>
                                Read More
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12`)
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}
 
export default Home;