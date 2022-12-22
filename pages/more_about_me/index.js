import Layout from '../../components/layout/Layout'
import styles from "../../styles/modules/IndexAbout.module.css"

import Skills from "../../components/about/Skills";
import Learning from "../../components/about/Learning";
import Hobbies from "../../components/about/Hobbies";
import ProjectCard from "../../components/portfolio/Projects"
import { useState } from 'react';

import { CSharpIcon} from '../../components/Icons.Svg';

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
                <h2 className={styles.div_principal__H2+" textUbuntu tR_Xlarge"}>Sobre mi :</h2>
                <p className={styles.div_principal__P+" tR_medium"}>Me gusta crear y me gusta aprender. Gracias a estas dos de mis cualidades fue que decidí aventurarme en el mundo del desarrollo de software... y me encantó !!.</p>
                <p className={styles.div_principal__P+" tR_medium"}>Comencé aprendiendo con el lenguaje JavaScript debido a que se puede crear contenido para diversas áreas de la programación. Actualmente estoy enfocandome en el desarrollo web , pero también me encantaría obtener conocimientos sobre el desarollo de aplicaciones de servidor y aplicaciones moviles.</p>
                <p className={styles.div_principal__P+" tR_medium"}>A continuación encontrarás mas detalles sobre: lo que me gusta hacer, nuevos aprendizages y proyectos que estoy desarrolando.</p>
              </div>
            </section>

            <section className={styles.sector_secundary}>
                <div className={styles.TAB}>
                  <nav className={styles.tabNavigator}>
                      <button onClick={()=>changeTab(1)} className={HandleTab == 1? styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__left : styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__left+" "+styles.tabNavigator__btnOFF}>Cosas que estoy aprendiendo</button>
                      <button onClick={()=>changeTab(2)} className={HandleTab == 2? styles.tabNavigator__btn+" tR_medium" : styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__btnOFF}>Proyectos en desarrollo</button>
                      <button onClick={()=>changeTab(3)} className={HandleTab == 3? styles.tabNavigator__btn+" tR_medium" : styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__btnOFF}>Hobbies</button>
                      <button onClick={()=>changeTab(4)} className={HandleTab == 4? styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__right : styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__right+" "+styles.tabNavigator__btnOFF}></button>
                  </nav>
                  <div className={styles.tabContainer}>
                      <div className={HandleTab == 1? styles.SectionTab+" "+styles.divLearning : styles.SectionTabOFF}>
                          <Learning Title="Graphql" Text="Para optimizar la comunicacion entre el cliente y el servidor y para que los datos que se manipulen sean mas precisos. Aprender sobre esta tecnología es una de mis prioridades."><img src='/icons/graphql.png'/></Learning>
                          <Learning Title="Patrones de diseño" Text="Considero que conocer patrones de diseño es bastante util para expandir la mente creativa de un programador. Me resultan muy interesantes y utiles en ciertas ocaciones."><img src='/icons/patrones_diseño.png'/></Learning>
                          <Learning Title=".NET" Text=".Net me resulta un entorno de desarrollo moy interesante, en el que se pueden hacer aplicaciones de muchos tipos. Estoy comenzando a aprender sus distintas plantillas y a la vez reorzando mi programacion orientada a objetos."><CSharpIcon/></Learning>
                      </div>
                      <div className={HandleTab == 2? styles.SectionTab+" "+styles.divDevProjects : styles.SectionTabOFF}>
                          <ProjectCard linkView ="No disponible" linkGithub="https://www.google.com/" Title="Sitio de encuestas" Image="/abstracview.jpg" Description="Sitio web tipo red social en el que los usuarios registrados pueden crear encuestas o participar en las encuestas de otros usuarios." ConocimientosEmpleados="No disponible" Tecnologias={["null", "null", "null", "null"]}/>
                          <ProjectCard linkView ="No disponible" linkGithub="https://www.google.com/" Title="Generador de curriculum<" Image="/abstracview.jpg" Description="En este sitio web podrás crear tu curriculum de manera fácil y rápida utilizando nuestras plantillas con diseños increíbles." ConocimientosEmpleados="Manejo de amplio formulario con react hook form, envío de datos a aplicación backend que devuelve el pdf creado." Tecnologias={["react", "nextJS", "Teilwind", "React-Hoock-Form"]}/>
                      </div>
                      <div className={HandleTab == 3? styles.SectionTab+" "+styles.divHobbies: styles.SectionTabOFF}>
                          <Hobbies Image="/abstracview.jpg" Title= "Dibujar" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Hobbies Image="/abstracview.jpg" Title= "Musica" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Hobbies Image="/abstracview.jpg" Title= "Ejercitarme" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                      </div>
                      <div className={HandleTab == 4? styles.SectionTab+" "+styles.divSkills : styles.SectionTabOFF}>
                          {/* <Skills Image="/abstracview.jpg" Title= "Buena capacidad Lógica" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Skills Image="/abstracview.jpg" Title= "Hábil aprendiz" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                          <Skills Image="/abstracview.jpg" Title= "Empatía y tolerancia" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/> */}
                      </div>
                  </div>
                </div>
            </section>
        </Layout>

    </div>
  )
}