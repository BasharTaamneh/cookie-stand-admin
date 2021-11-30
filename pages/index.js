import Head from 'next/head'
import Form from "./Form"
import { useState } from 'react'

export default function Home() {

  const [store, setStore] = useState();

  const addStore = (newStore) => {
    setStore(JSON.stringify(newStore));

  }
  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <main className=" justify-content">

        <header class="fixed inset-x-0 top-0 flex justify-between p-4 bg-green-500 border-b ">
          <h1 class="text-4xl font-semibold">
            Cookie Stand Admin

          </h1>
        </header>

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

      <footer className="fixed inset-x-0 bottom-0 flex justify-between p-3 mt-8 bg-green-600 border-t">
        <b className="text-sm font-normal"> &copy; 2021 </b>
      </footer>

    </div>
  )
}
