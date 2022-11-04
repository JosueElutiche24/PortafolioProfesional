import stylesCards from "../../styles/modules/Portfolio.module.css"
import { useState } from 'react'

function ProjectCard({Title, Text, Image, Text2, Text3, link}) {

    const [style1, setstyle1] = useState("")
    const [style2, setstyle2] = useState("")
    const [style3, setstyle3] = useState("")

function flipCard(){
    if(style1==stylesCards.flipdivProjectCards){
        setstyle1("")
        setstyle2("")
        setstyle3("")
    }else{
        setstyle1(stylesCards.flipdivProjectCards)
        setstyle2(stylesCards.flipProjectCard__pt2)
        setstyle3(stylesCards.flipProjectCard__pt3)
    }
}

return (
    <div className={style1 +" "+stylesCards.divProjectCards}>
        <div className={stylesCards.subdivProjectCards}>
            <div className={stylesCards.ProjectCard__pt1}>
                <img className={stylesCards.ProjectCard__pt1__img} src={Image}/>
                <h2 className={stylesCards.ProjectCard__pt1__h2}>{Title}</h2>
            </div>
            <div className={style2+" "+stylesCards.ProjectCard__pt2}>
                <h2 className={stylesCards.ProjectCard__pt2__h2}>{Title}</h2>
                <p className={stylesCards.ProjectCard__pt2__p}>{Text}</p>
                <button className={stylesCards.ProjectCard__pt2__btn} onClick={()=>{flipCard()}}>Mas informacion</button>
            </div>
            <div className={style3 +" "+stylesCards.ProjectCard__pt3}>
                <div className={stylesCards.ProjectCard__pt3__div1}>
                    <div className={stylesCards.ProjectCard__pt3__div1__subdiv1}>
                        <h4 className={stylesCards.titleConocimientoEmpleado}>Conocimiento empleado</h4>
                        <p className={stylesCards.textConocimientoEmpleado}>{Text2}</p>
                    </div>
                    <div className={stylesCards.ProjectCard__pt3__div1__subdiv2}>
                        <p className={stylesCards.P_enlaceGit}>Repositorio en github : <a href={link}>{link}</a></p>
                        <button className={stylesCards.btnClosedProject} onClick={()=>{flipCard()}}>volver</button>
                    </div>
                </div>
                <div className={stylesCards.ProjectCard__pt3__div2}>
                    <h4 className={stylesCards.titleTecnologías}>Tecnologías utilizadas</h4>
                    <p className={stylesCards.textTecnologías}>{Text3}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard