import Link from "next/link";

const page = () => {
    return (
        <div className='bg-gray-800 w-screen h-screen flex justify-center items-center'>
            <Link
                className='bg-gray-100 px-6 py-3 rounded'
                href='/docs'>
                👉 Docs
            </Link>
        </div>
    );
};

export default page;

