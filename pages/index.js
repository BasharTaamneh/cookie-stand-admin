import Head from 'next/head'
import Form from "./Form"
import Header from "./Header"
import Footer from "./Footer"

import { useState } from 'react'

export default function Home() {

  const [store, setStore] = useState();

  const addStore = (newStore) => {
    setStore(JSON.stringify(newStore));

  }
  return (

    <div className="flex items-center justify-center min-h-screen p-2">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <main className=" justify-content">

        <Header/>

        {/* //////////////////////////////////////////////////////// */}
        <Form onSubmit={addStore} />
        
        <br />

        <div className="flex justify-center p-1 mt-6">
          <p> Report table coming soon ...</p>
        </div>

        <dev className="flex justify-center p-2 mt-6">
          <pre>{store}</pre>
        </dev>

        {/* //////////////////////////////////////////////////////// */}

      </main>

      <Footer/>

    </div>
  )
}
