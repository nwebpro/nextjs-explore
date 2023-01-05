import Meta from "../../Components/Meta/Meta";

const SingleBlogPost = ({ singlePost }: any) => {
    return ( 
        <>
            <Meta 
                title={singlePost.title}
                keywords={singlePost.title}
                description={singlePost.body}
            />

            <section>
                <div>
                    <h1>{singlePost.title}</h1>
                    <p>{singlePost.body}</p>
                </div>
            </section>
        </>
     );
}

export const getServerSideProps = async (context: any) => {
    const { params } = context
    const blogId = params.blogId
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const singleBlog = await res.json()

    return {
        props: {
            singlePost: singleBlog
        }
    }
}

export default SingleBlogPost;