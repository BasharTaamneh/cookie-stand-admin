import Link from 'next/link'

export default function Overview(){
    return(
        <>
            <div className="flex justify-center "  >
                <p className="text-lg font-bold text-blue-500">Hi</p>
            
                
            </div>
            <div className="flex justify-center p-4 border-collapse  border border-green-800 ..."  >
            <Link href='/' >
                <a>
                    <h1 className="text-4xl font-semibold">
                        Cookie Stand Admin

                    </h1>
                </a>
            </Link>
            </div>
        </>
    )
}