import Link from 'next/link'


function Header({user, logout}){
    return(
        <header className="fixed inset-x-0 top-0 z-50 flex p-4 bg-green-500 border-b justify-content">
            <Link href='/'>
                <a>
                    <h1 className="text-4xl font-semibold">
                        Cookie Stand Admin

                    </h1>
                </a>
            </Link>
        
            {user ? <>
                <button className="absolute px-5 py-1 font-medium transition-all duration-150 transform bg-white rounded-lg shadow-lg right-96 hover:shadow-2xl hover:bg-gray-300">
                    {user.username}
                </button>

                <button onClick={logout} className="absolute px-5 py-1 font-medium transition-all duration-150 transform bg-white rounded-lg shadow-lg right-64 hover:shadow-2xl hover:bg-gray-300">
                    Sign out
                </button>

            </>
                : <></>}
        
            <Link href='/overview' >
                <button className="absolute object-right px-5 py-1 font-medium transition-all duration-150 transform bg-white rounded-lg shadow-lg right-32 hover:shadow-2xl hover:bg-gray-300">
                    Overview
                </button>
            </Link>
        
        
        
        </header>
    )
}
export default Header;