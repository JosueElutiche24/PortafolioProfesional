import styles from "../../styles/modules/Portfolio.module.css"
import ProjectCard from "./Projects";

function Portfolio(){
    return(
        <section className={styles.sectionPortfolio} id="PortfolioArea">
        <h2 className={styles.sectionPortfolio__h2+" tR_Xlarge"}>Mis Proyectos :</h2>
        <dir className={styles.sectionPortfolio__divProjects}>
            <ProjectCard linkView ="No disponible" linkGithub ="No disponible" Title="No disponnible" Image="/abstracview.jpg" Description="Los proyectos para esta sección aún estan en estado de desarrollo" ConocimientosEmpleados="No disponibe" Tecnologias={["null","null","null","null","null","null",]}/>
            <ProjectCard linkView ="https://www.google.com/" linkGithub ="https://www.google.com/" Title="Mi sitio Web" Image="/LogoLaits1.png" Description="Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo, tambien con la intención de poder ser contactado por personas interezadas en lo que hago." ConocimientosEmpleados="En el desarrollo de este proyecto se utilizó: Principalmente un alto nivel de Css. Buen manejo de componentes y Hoocks de react. Buen manejo del sistema de paginación y de ruteo de NextJs. Implementación del formulario de contacto con API de Gmail. Despliegue del sitio web en hosting y compra de dominio." Tecnologias={["react", "nextJS", "reactIcons", "tsparticles"]}/>

            <ProjectCard linkView ="https://www.google.com/" linkGithub ="https://www.google.com/" Title="Mi sitio Web" Image="/abstracview.jpg" Description="Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo,Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo,  tambien con la intención de poder ser contactado por personas interezadas en lo que hago." ConocimientosEmpleados="Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo, Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo, Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo,En el desarrollo de este proyecto se utilizó: Principalmente un alto nivel de Css. Buen manejo de componentes desarrollo de este proyecto se utilizó: Principalmente un alto nivel de Css. Buen manejo de component y Hoocks de react. Buen manejo del sistema de paginación y de ruteo de NextJs. Implementación del formulario de contacto con API de Gmail. Despliegue del sitio web en hosting y compra de dominio." Tecnologias={["react", "nextJS", "reactIcons", "tsparticles", "reactIcons", "tsparticles","nextJS", "reactIcons", "react", "nextJS", "reactIcons", "tsparticles", "reactIcons", "tsparticles","nextJS", "reactIcons"]}/>
        </dir>
        </section>
    )
}

export default Portfolio;