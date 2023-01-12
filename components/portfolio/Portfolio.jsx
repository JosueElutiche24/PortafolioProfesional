import styles from "../../styles/modules/Portfolio.module.css"
import ProjectCard from "./Projects";

function Portfolio(){
    return(
        <section className={styles.sectionPortfolio} id="PortfolioArea">
        <h2 className={styles.sectionPortfolio__h2+" tR_Xlarge"}>Mis Proyectos :</h2>
        <dir className={styles.sectionPortfolio__divProjects}>
            <ProjectCard linkView ="https://super-games.vercel.app/login" linkGithub ="https://github.com/JosueElutiche24/SuperGames" Title="Super Games" Image="/gamerPanda.jpeg" Collection={["/gamerPanda.jpeg","guitarPanda.jpeg","/moonPanda.jpeg"]} Description="Un sitio en el que te puedes registrar y jugar a memoria, busca minas y snake. Almacenamos la puntuación que obtengas en tus mejores partidas para que compitas con los mejores usuarios." ConocimientosEmpleados="Sistema de registro de usuarios, rutas protegidas y generación de tokens almacenados en cookies utilizando JsonWebToken, control de diversos useEffect y useStates para la creación de los controles de los juegos, se utilizó arrays bidimensionales para buscaminas y snake. El backend fue construido en el mismo proyecto sobre Next js con una estructura de  Api rest, con una base de datos Mysql alojada en internet con el servicio de  PlanetScale." Tecnologias={["React","Next Js","Tailwind","JWT","NySql","Vercel","PlanetScale",]}/>
            <ProjectCard linkView ="https://www.jguzman.tk/" linkGithub ="https://github.com/JosueElutiche24/PortafolioProfesional" Title="Mi sitio Web" Image="/moonPanda.jpeg" Collection={["No disponible"]} Description="Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo, también con la intención de poder ser contactado por personas interesadas en lo que hago." ConocimientosEmpleados="En el desarrollo de este proyecto se utilizó: Principalmente un alto nivel de Css. Buen manejo de componentes y Hoocks de react. Implementación del formulario de contacto con API de Gmail. Despliegue del sitio web en hosting y adquisición de un dominio propio." Tecnologias={["React", "NextJs", "Vercel","emailJS", "Tsparticles"]}/>
        </dir>
        </section>
    )
}

export default Portfolio;