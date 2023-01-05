import '../styles/globals.css'
import '../styles/Header.scss'
import '../styles/Footer.scss'
import type { AppProps } from 'next/app'
import Layout from '../Components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
