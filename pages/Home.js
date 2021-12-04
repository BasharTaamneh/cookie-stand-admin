import { useAuth } from "../contexts/auth"

import Head from 'next/head'
import Header from "./components/Header"
import LoginForm from "./components/LoginForm"

import Admin from "./components/CookieStandAdmin"
import Footer from "./components/Footer"
export default function Home() {
    const { login , user, logout } = useAuth()
    console.log(user);
    return(
        <>
            <div className="flex justify-center min-h-screen p-2 mb-20 bg-green-50">
                <Head>
                    <title>Cookie Stand Admin</title>
                </Head>

                <main className="flex justify-center w-full mt-20 justify-content">
                <Header user={user} logout={logout}/>
                
                    {user ? <Admin /> : <><LoginForm login={login} /> <Footer/></>}
                    
                </main>
            </div>
        </>
    )
}