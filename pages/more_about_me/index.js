import Layout from '../../components/layout/Layout'
import styles from "../../styles/modules/IndexAbout.module.css"

import Skills from "../../components/about/Skills";
import Learning from "../../components/about/Learning";
import Hobbies from "../../components/about/Hobbies";
import ProjectCard from "../../components/portfolio/Projects"
import { useState } from 'react';

export default function About_me() {
  const [HandleTab, setHandleTab] = useState(1)

  function changeTab(btn){
    if(btn == 1)setHandleTab(1)
    if(btn == 2)setHandleTab(2)
    if(btn == 3)setHandleTab(3)
    if(btn == 4)setHandleTab(4)
  }

  return (
    <div>
        <Layout title='more_about_me'>
            <section className={styles.sector_primary}>
              <div className={styles.div_principal}>
                <h2 className={styles.div_principal__H2}>Sobre mi :</h2>
                <p className={styles.div_principal__P}>Me gusta crear y me gusta aprender. Gracias a estas dos de mis cualidades fue que decidí aventurarme en el mundo del desarrollo de software... y me encantó !!.</p>
                <p className={styles.div_principal__P}>Comencé aprendiendo con el lenguaje JavaScript debido a que se puede crear contenido para diversas áreas de la programación. Actualmente estoy enfocandome en el desarrollo web , pero también me encantaría obtener conocimientos sobre el desarollo de aplicaciones de servidor y aplicaciones nativas.</p>
                <p className={styles.div_principal__P}>A continuación encontrarás mas detalles sobre: lo que me gusta hacer, nuevos aprendizages y proyectos que estoy desarrolando.</p>
              </div>
            </section>

            <section className={styles.sector_secundary}>
                <div className={styles.TAB}>
                  <nav className={styles.tabNavigator}>
                      <button onClick={()=>changeTab(1)} className={HandleTab == 1? styles.tabNavigator__btn+" "+styles.tabNavigator__left : styles.tabNavigator__btn+" "+styles.tabNavigator__left+" "+styles.tabNavigator__btnOFF}>Cosas que quiero aprender</button>
                      <button onClick={()=>changeTab(2)} className={HandleTab == 2? styles.tabNavigator__btn : styles.tabNavigator__btn+" "+styles.tabNavigator__btnOFF}>Proyectos en desarrollo</button>
                      <button onClick={()=>changeTab(3)} className={HandleTab == 3? styles.tabNavigator__btn : styles.tabNavigator__btn+" "+styles.tabNavigator__btnOFF}>Hobbies</button>
                      <button onClick={()=>changeTab(4)} className={HandleTab == 4? styles.tabNavigator__btn+" "+styles.tabNavigator__right : styles.tabNavigator__btn+" "+styles.tabNavigator__right+" "+styles.tabNavigator__btnOFF}>Habilidades</button>
                  </nav>
                  <div className={styles.tabContainer}>
                      <div className={HandleTab == 1? styles.SectionTab+" "+styles.divLearning : styles.SectionTabOFF}>
                          <Learning Title="PhosgreSQL" Image="FaAmazon" Text="Texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba]"/>
                          <Learning Title="Titulo de prueba" Image="FaApple" Text="Texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba]"/>
                          <Learning Title="Titulo de prueba" Image="FaCss3Alt" Text="Texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba]"/>
                          <Learning Title="Titulo de prueba" Image="FaBluetoothB" Text="Texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba]"/>
                      </div>
                      <div className={HandleTab == 2? styles.SectionTab+" "+styles.divDevProjects : styles.SectionTabOFF}>
                          <ProjectCard link ="https://www.google.com/" Title="No disponnible" Image="/abstracview.jpg" Text="Los proyectos para esta sección aún estan en estado de desarrollo" Text2="text2" Text3="Text3"/>
                          <ProjectCard link ="https://www.google.com/" Title="No disponnible" Image="/abstracview.jpg" Text="Los proyectos para esta sección aún estan en estado de desarrollo" Text2="text2" Text3="Text3"/>
                      </div>
                      <div className={HandleTab == 3? styles.SectionTab+" "+styles.divHobbies: styles.SectionTabOFF}>
                          <Hobbies Image="/abstracview.jpg" Num="2" Title= "Titulo de ejemplo" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Hobbies Image="/abstracview.jpg" Num="2" Title= "Titulo de ejemplo" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Hobbies Image="/abstracview.jpg" Num="2" Title= "Titulo de ejemplo" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Hobbies Image="/abstracview.jpg" Num="2" Title= "Titulo de ejemplo" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                      </div>
                      <div className={HandleTab == 4? styles.SectionTab+" "+styles.divSkills : styles.SectionTabOFF}>
                          <Skills Image="/abstracview.jpg" Num="1" Title= "Buena capacidad Lógica" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Skills Image="/abstracview.jpg" Num="2" Title= "Hábil aprendiz" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Skills Image="/abstracview.jpg" Num="3" Title= "Flexibilidad y adaptabilidad" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Skills Image="/abstracview.jpg" Num="1" Title= "Paciente" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Skills Image="/abstracview.jpg" Num="2" Title= "Empatía y tolerancia" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Skills Image="/abstracview.jpg" Num="2" Title= "Titulo de ejemplo" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                      </div>
                  </div>
                </div>
            </section>
        </Layout>

    </div>
  )
}
