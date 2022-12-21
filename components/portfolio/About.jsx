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
                            <p className={styles.sectionAbout__div1__P + " tR_medium"}>Hola, me llamo Josué y es un gusto saludarte. Soy un joven autodidacta, programador especializado en el area de desarrollo web.</p>
                            <p className={styles.sectionAbout__div1__P+ " tR_medium"}>Tengo 19 años, me gradué como bachiller hace 2 años, y hasta ahora todo lo que se sobre programacion lo he aprendido por cuenta propia.</p>
                            <p className={styles.sectionAbout__div1__P+ " tR_medium"}>Mi unica experiencia es la que se ve reflejada en los proyectos que puedes encontrar en las proximas secciones.</p>
                            <p className={styles.sectionAbout__div1__P+ " tR_medium"}>Hechate un ojo por todo este sitio. Y si por cualquier cosa deseas contactarme, yo estare feliz de recibir tu mensaje.</p>
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
                <p className={styles.sectionAbout__div2__pKnowledge+" tR_medium"}>Las tecnologías principales con las que trabajo son : Html5, Css, Teilwid, Javascript, Node js, Typescript, React, Next Js, Expres, Nest, MongoDB y MySql.</p>
                <p className={styles.sectionAbout__div2__pKnowledge+" tR_medium"}>Tengo conocimientos en: </p>
                    <ul className={styles.sectionAbout__div2_ul+" tR_medium"}>
                        <li>Maquetar paginas web utilizando react, Next Js, Css o Tailwind.</li>
                        <li>Consumir apis Rest utilizando fetch y/o axios.</li>
                        <li>Construir aplicaciones backend. Ya sea mis propias Apis Rest, Cruds u otros utilizando Typescript, Express o Nest.</li>
                        <li>Construir y manipular bases de datos relacionales con MySql y no relacionales con MongoDB.</li>
                    </ul>
                <p className={styles.sectionAbout__div2__pKnowledge+" tR_medium"}>Actualmente estoy estudiando sobre patrones de diseño, Graphql y .Net(auque en este ultimmo aún soy un novato).</p>
                    <div className={styles.divConocimientos}>
                        <Knowledge/>
                    </div>
                <br/>
            </div>
        </section>
    )
}

export default About;