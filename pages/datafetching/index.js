import Link from "next/link";

function Postlist({data}) {
    console.log(data);
    return (
        <div>
            {data.map((post,index)=>{
                return(
                    <div key={index}>
                        <Link href={`/datafetching/${post.id}`} passHref>
                        <h1>{post.title}</h1>
                        </Link>
                        {/* <p>{post.body}</p> */}
                    </div>
                )
            })}
        </div>
    );
}

// export async function getStaticProps(ctx){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     return{
//         props:{
//             data: data,
//         }
//     }
// }

export async function getServerSideProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return{
        props:{
            data: data,
        }
    }
}

export default Postlist;