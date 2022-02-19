import Layout from '../components/Layout'
import '../styles/globals.css' // importo estilos globales acá


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
 
      <Component {...pageProps} />
    </Layout>
    )
  }
  export default MyApp

