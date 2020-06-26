import Head from 'next/head'
import Navigation from '../components/home/Navigation'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <div className="px-5 py-2">Game Start</div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const response = null // get api to bssm await fetch()
  const bssms = response.json()
  return {
    bssms
  }
}
