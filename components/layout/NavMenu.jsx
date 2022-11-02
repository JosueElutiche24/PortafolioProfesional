import React from 'react'
import Particulario from './Particulario'
import styles from "../../styles/modules/NavMenu.module.css"
import Link from 'next/link'

export default function NavMenu({title}) {

  React.useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      document.querySelector("."+styles.div_header).classList.toggle(styles.header__pinter, window.scrollY>1)
    })
  })

  if(title == "principal-page")return (
    <header className={styles.headerIndex}>
    <Particulario/>
    <div className={styles.div_header}>
        <img src="/LogoLaits1.png" className={styles.header__img}/>
        <h1 className={styles.header__h1}>Bienvenidos</h1>
        <nav className={styles.header__nav}>
            {/* <Link href="/"><a className={styles.header__nav__a}>Inicio</a></Link> */}
            <Link href="/"><a className={styles.header__nav__a+" "+styles.header__nav__a_Selected}>Portafolio</a></Link>
            <Link href="/contact"><a className={styles.header__nav__a} >Contactame</a></Link>
            <Link href="/more_about_me"><a className={styles.header__nav__a}>Mas sobre mi</a></Link>
        </nav>
    </div>
    <div className={styles.divsubHeader}>
      <h1 className={styles.divsubHeader_h1}>Josué Guzman</h1>
      <h2 className={styles.divsubHeader_h2}>Desarrollador Frontend</h2>
    </div>
</header>
  )
  if(title == "contact")return (
    <header className={styles.header}>
    <Particulario/>
    <div className={styles.div_header}>
        <img src="/LogoLaits1.png" className={styles.header__img}/>
        <h1 className={styles.header__h1}>Bienvenidos</h1>
        <nav className={styles.header__nav}>
            {/* <Link href="/"><a className={styles.header__nav__a}>Inicio</a></Link> */}
            <Link href="/"><a className={styles.header__nav__a}>Portafolio</a></Link>
            <Link href="/contact"><a className={styles.header__nav__a+" "+styles.header__nav__a_Selected} >Contactame</a></Link>
            <Link href="/more_about_me"><a className={styles.header__nav__a}>Mas sobre mi</a></Link>
        </nav>
    </div>
</header>
  )
  if(title == "more_about_me")return (
    <header className={styles.header}>
    <Particulario/>
    <div className={styles.div_header}>
        <img src="/LogoLaits1.png" className={styles.header__img}/>
        <h1 className={styles.header__h1}>Bienvenidos</h1>
        <nav className={styles.header__nav}>
            {/* <Link href="/"><a className={styles.header__nav__a}>Inicio</a></Link> */}
            <Link href="/"><a className={styles.header__nav__a}>Portafolio</a></Link>
            <Link href="/contact"><a className={styles.header__nav__a} >Contactame</a></Link>
            <Link href="/more_about_me"><a className={styles.header__nav__a+" "+styles.header__nav__a_Selected}>Mas sobre mi</a></Link>
        </nav>
    </div>
</header>
  )
}
