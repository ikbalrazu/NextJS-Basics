
import { useRouter } from "next/router";

function BlogList(){
    const router = useRouter();
    const params = router.query.params;
    console.log(params);
    
    if(params?.length === 1){
        return(
            <h2>
                {" "}
                this page for  {params[0]} and {params[1]}{" "}
            </h2>
        )
    }
    if(params?.length === 2){
        return(
            <h2>
                {" "}
                this page for  {params[0]} and {params[1]}{" "}
            </h2>
        )
    }
    return <div>Document Home page</div>
}

export default BlogList;