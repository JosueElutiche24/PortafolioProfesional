import styles from "../../styles/modules/Portfolio.module.css"
import ProjectCard from "./Projects";

function Portfolio(){
    return(
        <section className={styles.sectionPortfolio} id="PortfolioArea">
        <h2 className={styles.sectionPortfolio__h2}>Mis Proyectos :</h2>
        <dir className={styles.sectionPortfolio__divProjects}>
            <ProjectCard Title="No disponnible" Image="/abstracview.jpg" Text="Los proyectos para esta sección aún estan en estado de desarrollo"/>
        </dir>
        </section>
    )
}

export default Portfolio;