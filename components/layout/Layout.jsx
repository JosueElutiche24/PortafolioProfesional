import React from 'react'
import Head from 'next/head'
import NavMenu from './NavMenu'
import Footer from './Footer'

export default function Layout({children, title = "no-hay-titulo"}) {
  return (
    <div>     
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
            <meta name="description" content="Portafolio personal de Josue Guzman"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavMenu title= {title}/>

        <div>{children}</div>
        <Footer title={title}/>
  </div>
  )
}
