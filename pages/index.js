import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">

        <header className="fixed inset-x-0 top-0 flex justify-between p-4 bg-green-500 border-b">
          <h1 className="text-4xl font-semibold">
            Cookie Stand Admin
          </h1>
        </header>

        
        <p className="justify-center">Report table coming soon</p>

      </main>
      <footer className="fixed inset-x-0 bottom-0 flex justify-between p-3 bg-green-600 border-t">
        <b className="text-sm font-normal"> &copy; 2021 </b>
      </footer>
    </div>
  )
}
