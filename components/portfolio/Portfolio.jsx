import styles from "../../styles/modules/Portfolio.module.css"
import ProjectCard from "./Projects";

function Portfolio(){
    return(
        <section className={styles.sectionPortfolio} id="PortfolioArea">
        <h2 className={styles.sectionPortfolio__h2}>Mis Proyectos :</h2>
        <dir className={styles.sectionPortfolio__divProjects}>
            <ProjectCard link ="https://www.google.com/" Title="No disponnible" Image="/abstracview.jpg" Text="Los proyectos para esta sección aún estan en estado de desarrollo" Text2="text2" Text3="Text3"/>
            <ProjectCard link ="https://www.google.com/" Title="Mi sitio Web" Image="/LogoLaits1.png" Text="Este sitio web fue creado con la intención de dar a conocer mis habilidadews y conocimientos a los empleadores y personas interesadas en mi trabajo. " Text2="asdawsasdgadhfgyhkliharfaweasrhgrtyj6ylktujkdfghsdasda" Text3="Text3"/>
        </dir>
        </section>
    )
}

export default Portfolio;