import { useRouter } from "next/router";

function productlist(){
    const router = useRouter();
    const productId = router.query.productId
    return <div>This is product id {productId}</div>
}

export default productlist;