import Knowledge from "./Knowledge";
import styles from "../../styles/modules/About.module.css"
import Link from "next/link";

function About(){
    return(
        <section className={styles.sectionAbout}>
            <div className={styles.sectionAbout__div1}>
                    <h2 className={styles.sectionAbout__div1__H2+" tR_Xlarge"} id="AboutArea">Sobre mi :</h2>
                    <div className={styles.sectionAbout__div1__Flexor}>
                        <div className={styles.sectionAbout__div1__Parrafos}>
                            <p className={styles.sectionAbout__div1__P + " tR_medium"}>Hola, mi nombre es Josue Guzman y soy un joven autodidacta al que le encanta la programación.</p>
                            <p className={styles.sectionAbout__div1__P+ " tR_medium"}>Luego de terminar mis estudios diversificados comencé con mi aventura de aprendizaje y hoy te voy a contar sobre todo lo que e aprendido.</p>
                            <div className={styles.sectionAbout__div1__ContainerBtn}>
                                <a href="https://drive.google.com/uc?export=download&id=1TemQ0cvHIE-lM5CEVKmo811rCG5k_lua" className={styles.sectionAbout__div1__Btn}>Descarga mi CV</a>
                                <Link href="/contact"><a className={styles.sectionAbout__div1__Btn}>Contactame</a></Link>
                            </div>
                        </div>
                        <div className={styles.sectionAbout__div1__IMGContainer}>
                            <img  className={styles.sectionAbout__div1__IMG} src="/abstracview.jpg" />
                        </div>
                    </div>
            </div>
            <div className={styles.sectionAbout__div2}>
                <h2 className={styles.sectionAbout__div2__h2Knowledge+" tR_Xlarge"}> - Mis conocimientos</h2>
                <br/>
                <p className={styles.sectionAbout__div2__pKnowledge+" tR_medium"}>Trabajo principal mente con JavaScript y en conjunto con nodeJS. Prefiero desarroyar mis proyectos con NextJs y React. Todo el tiempo estoy aprendiendo nuevas tecnologías.</p>
                <br/>
                <div className={styles.divConocimientos}>
                    <Knowledge/>
                </div>
            </div>
        </section>
    )
}

export default About;