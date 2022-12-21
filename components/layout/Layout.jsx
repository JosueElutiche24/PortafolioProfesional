import React from 'react'
import Head from 'next/head'
import NavMenu from './NavMenu'
import Footer from './Footer'

export default function Layout({children, title = "no-hay-titulo"}) {
  return (
    <div>     
        <Head>
            <title>Josue G - Portafolio profesional</title>
            <meta charSet='utf-8'/>
            <meta name="description" content="Portafolio personal de Josue Guzman"/>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai&family=Ubuntu:ital,wght@0,400;1,500&display=swap" rel="stylesheet"/>
        </Head>
        <NavMenu title= {title}/>

        <div>{children}</div>
        <Footer title={title}/>
  </div>
  )
}
