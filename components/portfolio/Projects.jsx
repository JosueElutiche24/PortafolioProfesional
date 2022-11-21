import stylesCards from "../../styles/modules/Portfolio.module.css"
import { useState } from 'react'

function ProjectCard({Title, Description, Image, ConocimientosEmpleados, Tecnologias, linkGithub, linkView}) {

    const [Visible, setVisible] = useState(false)

function flipCard(){
    setVisible(!Visible)
}

return (
    <div className={Visible == false? stylesCards.divProjectCards : stylesCards.divProjectCards +" "+stylesCards.divProjectCards__full}>
        <div className={Visible == false? stylesCards.ZonaImg : stylesCards.ZonaImg+" "+stylesCards.ZonaImg__full}>
            <h2 className={stylesCards.ZonaImg__h2+" tR_medium"}>{Title}</h2>
            <img className={stylesCards.ZonaImg__img} src={Image}/>
        </div>
        <div className={Visible == false? stylesCards.ZonaDesplegable : stylesCards.ZonaDesplegable+" "+stylesCards.ZonaDesplegable__full}>
            <div className={Visible == false? stylesCards.ZonaDesplegable_PartVisible : stylesCards.hidden}>    
                <h2 className={stylesCards.PVisible__h2+" tR_medium"}>{Title}</h2>
                <p className={stylesCards.PVisible__p+" tR_small"}>{Description}</p>
                <button className={stylesCards.PVisible__btn+" tR_small"} onClick={flipCard}>Mas informacion</button>  
            </div>
            <div className={Visible == false? stylesCards.hidden : stylesCards.ZonaDesplegable_PartOculta}>
                <div className={stylesCards.POulta_Div1}>
                <div className={stylesCards.POulta_Div1__subdiv1}>
                        <h4 className={stylesCards.titleConocimientoEmpleado+" tR_medium"}>Conocimiento empleado</h4>
                        <p className={stylesCards.textConocimientoEmpleado+" tR_small"}>{ConocimientosEmpleados}</p>
                    </div>
                    <div className={stylesCards.POulta_Div1__subdiv2}>
                        <button className={stylesCards.btnClosedProject+" tR_small"} onClick={flipCard}>volver</button>
                    </div>
                </div>
                <div className={stylesCards.POulta_Div2}>
                    <h4 className={stylesCards.titleTecnologías+" tR_medium"}>Tecnologías utilizadas</h4>
                    <div className={stylesCards.Tecnologias__div}>
                        {Tecnologias.map((item, index)=>{
                            return <p  className={stylesCards.Tecnologias__item+" tR_small"} key={index}>{item}</p>
                        })}
                    </div>
                    <div className={stylesCards.Enlaces__div}>
                        {linkView !== "ModoDes" && <p className={stylesCards.P_enlaceSitio+" tR_small"}>Visitar sitio : <a href={linkView}>{linkView}</a></p>}
                        <p className={stylesCards.P_enlaceGit+" tR_small"}>Repositorio en github : <a href={linkGithub}>{linkGithub}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

return (
    <div className={style1 +" "+stylesCards.divProjectCards}>
        <div className={stylesCards.subdivProjectCards}>
            <div className={stylesCards.ProjectCard__pt1}>
                <img className={stylesCards.ProjectCard__pt1__img} src={Image}/>
                <h2 className={stylesCards.ProjectCard__pt1__h2}>{Title}</h2>
            </div>
            <div className={style2+" "+stylesCards.ProjectCard__pt2}>
                <h2 className={stylesCards.ProjectCard__pt2__h2}>{Title}</h2>
                <p className={stylesCards.ProjectCard__pt2__p}>{Description}</p>
                <button className={stylesCards.ProjectCard__pt2__btn} onClick={()=>{flipCard()}}>Mas informacion</button>
            </div>

            <div className={style3 +" "+stylesCards.ProjectCard__pt3}>
                <div className={stylesCards.ProjectCard__pt3__div1}>
                    <div className={stylesCards.ProjectCard__pt3__div1__subdiv1}>
                        <h4 className={stylesCards.titleConocimientoEmpleado}>Conocimiento empleado</h4>
                        <p className={stylesCards.textConocimientoEmpleado}>{ConocimientosEmpleados}</p>
                    </div>
                    <div className={stylesCards.ProjectCard__pt3__div1__subdiv2}>
                        {linkView !== "ModoDes" && <p className={stylesCards.P_enlaceGit}>Visitar proyecto publicado : <a href={linkView}>{linkView}</a></p>}
                        <button className={stylesCards.btnClosedProject} onClick={()=>{flipCard()}}>volver</button>
                    </div>
                </div>
                <div className={stylesCards.ProjectCard__pt3__div2}>
                    <h4 className={stylesCards.titleTecnologías}>Tecnologías utilizadas</h4>
                        <div className={stylesCards.Tecnologias__div}>
                            {Tecnologias.map((item, index)=>{
                                return <p  className={stylesCards.Tecnologias__item} key={index}>{item}</p>
                            })}
                        </div>
                    <div className={stylesCards.ProjectCard__pt3__div2__subDiv}>
                        <p className={stylesCards.P_enlaceGit}>Repositorio en github : <a href={linkGithub}>{linkGithub}</a></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard