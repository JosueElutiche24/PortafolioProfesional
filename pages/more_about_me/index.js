import Layout from '../../components/layout/Layout'
import styles from "../../styles/modules/IndexAbout.module.css"

import Skills from "../../components/about/Skills";
import Learning from "../../components/about/Learning";
import Hobbies from "../../components/about/Hobbies";

export default function About_me() {
  return (
    <div>
        <Layout title='more_about_me'>
          <section>
            <div className={styles.sector_primary}>
              <div className={styles.div_principal}>
                <h2>Bienvenido a esta sección donde te contaré mas detalles sobre mi :</h2>
                <p>Esta sección contiene detalles de poca relevancia laboral, por lo que puede quedarse o ignorarla si desea.</p>
              </div>
              <nav className={styles.nav_principal}>
                <ul>
                  <h3>Contenido</h3>
                    <li className={styles.nav_principal_incisos}><a href='#'>sect 1</a></li>
                    <li className={styles.nav_principal_incisos}><a href='#'>sect 1</a></li>
                    <li className={styles.nav_principal_incisos}><a href='#'>sect 1</a></li>
                    <li className={styles.nav_principal_incisos}><a href='#'>sect 1</a></li>
                </ul>
              </nav>
            </div>

            <div className={styles.sector_secundary}>
            <h2 className={styles.sectionAbout__div2__h2Skills}>- Mis habilidades</h2>
                <br/>
                <div className={styles.divSkills}>
                    <Skills Image="/abstracview.jpg" Num="1" Title= "Buena capacidad Lógica" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                    <Skills Image="/abstracview.jpg" Num="2" Title= "Hábil aprendiz" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                    <Skills Image="/abstracview.jpg" Num="3" Title= "Flexibilidad y adaptabilidad" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                    <Skills Image="/abstracview.jpg" Num="1" Title= "Paciente" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                    <Skills Image="/abstracview.jpg" Num="2" Title= "Empatía y tolerancia" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                    <Skills Image="/abstracview.jpg" Num="2" Title= "Titulo de ejemplo" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                </div>
                <h2 className={styles.sectionAbout__div2__h2Skills}>- Cosas que quiero aprender</h2>
                <br/>
                <div className={styles.divLearning}>
                    <Learning Title="PhosgreSQL" Image="FaAmazon" Text="Texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba]"/>
                    <Learning Title="Titulo de prueba" Image="FaApple" Text="Texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba]"/>
                    <Learning Title="Titulo de prueba" Image="FaCss3Alt" Text="Texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba]"/>
                    <Learning Title="Titulo de prueba" Image="FaBluetoothB" Text="Texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba]"/>
                </div>
                <h2 className={styles.sectionAbout__div2__h2Skills}>- Mis hobbies</h2>
                <br/>
                <div className={styles.divHobbies}>
                    <Hobbies Image="/abstracview.jpg" Num="2" Title= "Titulo de ejemplo" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                    <Hobbies Image="/abstracview.jpg" Num="2" Title= "Titulo de ejemplo" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                    <Hobbies Image="/abstracview.jpg" Num="2" Title= "Titulo de ejemplo" Text="Texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo"/>
                </div>
            </div>
          </section>
        </Layout>

    </div>
  )
}
