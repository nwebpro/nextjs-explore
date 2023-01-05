import { useRouter } from "next/router";

const SingleBlogPost = () => {
    const router = useRouter()
    const { blogId } = router.query
    return ( 
        <div>
            this id blog details post id -  {blogId}
        </div>
     );
}
 
export default SingleBlogPost;