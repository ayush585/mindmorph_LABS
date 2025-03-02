import '@/styles/globals.css'
import Layout from '@/components/common/Layout'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
