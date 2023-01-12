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
                <h2 className={styles.div_principal__H2+" textUbuntu tR_Xlarge"}>Más sobre mi :</h2>
                <p className={styles.div_principal__P+" tR_medium"}>Terminé mi carrera de bachillerato con orientación en computación en 2020 y a partir de entonces me he dedicado a desarrollar mis habilidades para hacer las cosas que me gustan, cosas como el dibujo, la música y la programación.</p>
                <p className={styles.div_principal__P+" tR_medium"}>Actualmente ya he adquirido los conocimientos suficientes como para ser capaz de desarrollar proyectos completos de programación web y sigo aprendiendo para ser capaz de más.</p>
                <p className={styles.div_principal__P+" tR_medium"}>En la siguiente sección podrás descubrir sobre las cosas que actualmente estoy aprendiendo, los proyectos que me encuentro desarrollando y otros detalles sobre mi perfil.</p>
              </div>
            </section>

            <section className={styles.sector_secundary}>
                <div className={styles.TAB}>
                  <nav className={styles.tabNavigator}>
                      <button onClick={()=>changeTab(1)} className={HandleTab == 1? styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__left : styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__left+" "+styles.tabNavigator__btnOFF}>Cosas que estoy aprendiendo</button>
                      <button onClick={()=>changeTab(2)} className={HandleTab == 2? styles.tabNavigator__btn+" tR_medium" : styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__btnOFF}>Proyectos en desarrollo</button>
                      <button onClick={()=>changeTab(3)} className={HandleTab == 3? styles.tabNavigator__btn+" tR_medium" : styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__btnOFF}>Hobbys</button>
                      <button onClick={()=>changeTab(4)} className={HandleTab == 4? styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__right : styles.tabNavigator__btn+" tR_medium "+styles.tabNavigator__right+" "+styles.tabNavigator__btnOFF}></button>
                  </nav>
                  <div className={styles.tabContainer}>
                      <div className={HandleTab == 1? styles.SectionTab+" "+styles.divLearning : styles.SectionTabOFF}>
                          <Learning Title="Graphql" Text="Graphql me parece una tecnología muy util, actualmente me encuentro realizando practicas que incluyen graphql para poder dominarlo mejor."><img src='/icons/graphql.png'/></Learning>
                          <Learning Title="Patrones de diseño" Text="Considero que conocer patrones de diseño es bastante util para expandir la mente creativa de un programador. Me resultan muy interesantes y útiles en ciertas ocasiones."><img src='/icons/patrones_diseño.png'/></Learning>
                          <Learning Title=".NET" Text="El entorno de .Net es muy interesante, con este se pueden hacer aplicaciones de todo tipo. Y actualmente es bastante demandado, así que he decidido adentrarme en este nuevo entorno."><CSharpIcon/></Learning>
                      </div>
                      <div className={HandleTab == 2? styles.SectionTab+" "+styles.divDevProjects : styles.SectionTabOFF}>
                          <ProjectCard linkView ="ModoDes" linkGithub="No disponible" Title="Sitio de encuestas" Image="/projectImages/questionDuck.jpeg" Collection={["No disponible"]} Description="Sitio web tipo red social en el que los usuarios registrados pueden crear encuestas o participar en las encuestas de otros usuarios." ConocimientosEmpleados="No disponible" Tecnologias={["null", "null", "null", "null"]}/>
                          <ProjectCard linkView ="ModoDes" linkGithub="https://github.com/JosueG24/TheCats-Frontend" Title="The Cats" Image="/projectImages/TheCats.jpeg" Collection={["No disponible"]} Description="Sitio web que simula ser un orfanato de gatos en el que puedes darle nombre y adoptar al gato que mas te guste. Puedes hacerla funcionar con una api Rest o una graphql para realizar consultas y editar los datos." ConocimientosEmpleados="unknown" Tecnologias={["React", "Typescript", "Tailwind", "ApiRest", "Graphql", "MongoDB"]}/>
                      </div>
                      <div className={HandleTab == 3? styles.SectionTab+" "+styles.divHobbies: styles.SectionTabOFF}>
                          <Hobbies Image="/drawingPanda.jpeg" Title= "Dibujo" Text="Expresar mis ideas a traves del dibujo es uno de mis pasatiempos preferidos."/>
                          <Hobbies Image="/guitarPanda.jpeg" Title= "Música" Text="Me gusta tanto escuchar como interpretar música por que despierta la imaginación."/>
                          <Hobbies Image="/exercisingPanda.jpeg" Title= "Ejercicio" Text="Salir a caminar es algo que ayuda a la salud, además de que permite despejar la mente. "/>
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