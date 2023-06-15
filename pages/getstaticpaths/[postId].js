import { useRouter } from "next/router";



export const getStaticPaths = async()=>{

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await res.json();

    const paths = data.map((post)=>{
        return{
            params: {
                postId: post.id.toString(),
            },
        }
    })
    
    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async(context)=>{
    const id = context.params.postId;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return{
        props: {
            data,
        }
    
    }
}


function PostList({data}){
    console.log(data);
    // const router = useRouter;
    // const postId = router?.query?.postId
    // console.log(postId);
    return(
        <div>
            <h1>{data.id}. {data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
}

// export async function getStaticProps(ctx){
//     const {params} = ctx;

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

//     const data = await res.json();

//     return {
//         props: {
//             data: data,
//         }
//     }

// }

// export async function getStaticPaths(){
//     return{
//         paths: [
//             { params: {id:"1"} },
//             { params: {id: "2"} },
//             {params: { id:"3"}},
//         ],
//         fallback: false, //false or blocking
//     }
// }

export default PostList;