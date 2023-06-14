import Link from "next/link";

function about(){
    return (
        <div>
            This is about page
            <Link href="/">
                Back
            </Link>
        </div>
    )
}

export default about;