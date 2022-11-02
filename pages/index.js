import Image from 'next/image'
import Layout from '../components/layout/Layout'
import About from '../components/portfolio/About'
import Portfolio from '../components/portfolio/Portfolio'

export default function Home() {
  return (
    <Layout title="principal-page">
      <About/>
      <Portfolio/>
    </Layout>
  )
}
