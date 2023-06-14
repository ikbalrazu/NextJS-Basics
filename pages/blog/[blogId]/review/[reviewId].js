
import { useRouter } from "next/router";

function BlogList(){
    const router = useRouter();
    const {blogId, reviewId} = router.query
    return <div>This is product id {blogId} and this is review {reviewId}</div>
}

export default BlogList;