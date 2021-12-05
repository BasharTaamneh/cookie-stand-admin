// import { useAuth } from "../../contexts/auth"


export default function LoginForm({login}) {
    
    function handleLogin(event) {

        event.preventDefault()
        let username = event.target.username.value
        let password = event.target.password.value
        console.log(username, password)
        login(username, password)
        event.target.reset()
    }
    return (
        <div className='flex justify-center w-10/12 p-4 '>
            <form className='flex flex-col items-center w-full mt-12 bg-green-200 border border-t-2 border-green-600 rounded-lg shadow-2xl h-72' onSubmit={handleLogin} >

                <label className="block mt-5 mb-2 text-lg font-bold text-black-100" htmlFor="username " >USER NAME</label>
                <input type="text" name='username' id="username" className='w-10/12 h-8 pl-2' placeholder={'User Name'} required />
                <label className="block mt-5 mb-2 text-lg font-bold text-black-100" htmlFor="password ">PASSWORD</label>
                <input type="text" name='password' id='password' className='w-10/12 h-8 pl-2' placeholder={'Password'} required/>
                <div className="block w-10/12 mt-5">
                    <button
                        className="relative inline-block w-full font-bold text-black"
                    >
                        <div className="absolute h-full bg-green-700 border rounded-lg -inset-x-0 inset-y-2 -buttom-2 "></div>

                        <div className="relative px-8 py-4 duration-150 transform bg-green-500 border border-gray-500 rounded-lg shadow-2xl transision hover:translate-y-2">SIGN IN</div>
                    </button>
                </div>

            </form>
        </div>
    )

}