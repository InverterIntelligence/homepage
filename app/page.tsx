import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inverter Intelligence</title>
        <meta name="description" content="Optimized energy management coming soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2em', marginBottom: '1em' }}>Inverter Intelligence</h1>
        <p style={{ fontSize: '1.5em' }}>Optimized energy management coming soon!</p>
      </main>

      <footer style={{ position: 'absolute', bottom: '0', width: '100%', textAlign: 'center', padding: '1em 0' }}>
        <p>&copy; {new Date().getFullYear()} Inverter Intelligence</p>
      </footer>
    </div>
  )
}
