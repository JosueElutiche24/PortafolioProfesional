import styles from "../../styles/modules/Portfolio.module.css"
import ProjectCard from "./Projects";

function Portfolio(){
    return(
        <section className={styles.sectionPortfolio} id="PortfolioArea">
        <h2 className={styles.sectionPortfolio__h2+" tR_Xlarge"}>Mis Proyectos :</h2>
        <dir className={styles.sectionPortfolio__divProjects}>
            <ProjectCard linkView ="https://super-games.vercel.app/login" linkGithub ="https://github.com/JosueElutiche24/SuperGames" Title="Super Games" Image="/abstracview.jpg" Description="" ConocimientosEmpleados="" Tecnologias={["null","null","null","null","null","null",]}/>
            <ProjectCard linkView ="https://www.jguzman.tk/" linkGithub ="https://github.com/JosueElutiche24/PortafolioProfesional" Title="Mi sitio Web" Image="/LogoLaits1.png" Description="Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo, tambien con la intención de poder ser contactado por personas interezadas en lo que hago." ConocimientosEmpleados="En el desarrollo de este proyecto se utilizó: Principalmente un alto nivel de Css. Buen manejo de componentes y Hoocks de react. Buen manejo del sistema de paginación y de ruteo de NextJs. Implementación del formulario de contacto con API de Gmail. Despliegue del sitio web en hosting y adquisicion de un dominio propio." Tecnologias={["React", "NextJs", "Vercel","emailJS", "Tsparticles"]}/>
        </dir>
        </section>
    )
}

export default Portfolio;