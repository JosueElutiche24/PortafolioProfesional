import Knowledge from "./Knowledge";
import Skills from "./Skills.jsx";
import Learning from "./Learning";
import Hobbies from "./Hobbies";
import styles from "../../styles/modules/About.module.css"

function About(){
    return(
        <section className={styles.sectionAbout}>
            <div className={styles.sectionAbout__div1}>
            <div className={styles.sectionAbout__div1__subDiv1}>
                <h2 className={styles.sectionAbout__div1__subDiv1H2} id="AboutArea">Sobre mi :</h2>
                <br/>
                <p className={styles.sectionAbout__div1__subDiv1P}>Hola, mi nombre es Josue Guzman y soy un joven autodidacta al que le encanta la programación.</p>
                <p className={styles.sectionAbout__div1__subDiv1P}>Luego de terminar mis estudios diversificados comencé con mi aventura de aprendizaje y hoy te voy a contar sobre todo lo que e aprendido.</p>
                <div className={styles.sectionAbout__div1__subDiv1ContainerBtn}>
                    <a href="#" className={styles.sectionAbout__div1__subDiv1Btn}>Descarga mi CV</a>
                </div>
            </div>
            <div className={styles.sectionAbout__div1__subDiv2}>
                <img  className={styles.sectionAbout__div1__subDiv2IMG} src="/PandaLaptopTrans.png" />
            </div>
            </div>
            <div className={styles.sectionAbout__div2}>
                <h2 className={styles.sectionAbout__div2__h2Knowledge}> - Mis conocimientos</h2>
                <br/>
                <p className={styles.sectionAbout__div2__pKnowledge}>Trabajo principal mente con JavaScript y en conjunto con nodeJS. Prefiero desarroyar mis proyectos con NextJs y React. Todo el tiempo estoy aprendiendo nuevas tecnologías.</p>
                <br/>
                <div className={styles.divConocimientos}>
                    <Knowledge/>
                </div>
                <br/>
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
    )
}

export default About;