import Head from 'next/head'
import Main from '../components/Main'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Guitto Transportation LLC | Luxury Car Services</title>
        <meta name="description" content="If you're looking for a luxury car ride, please don't hesitate to reach out." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <Projects />
    <About />
    <Contact />
    </div>
   
  )
}
