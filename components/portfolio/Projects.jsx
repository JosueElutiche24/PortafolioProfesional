import stylesCards from "../../styles/modules/Portfolio.module.css"
import { useState } from 'react'

function ProjectCard({Title, Text, Image}) {

    const [style1, setstyle1] = useState("")
    const [style2, setstyle2] = useState("")
    const [style3, setstyle3] = useState("")

function flipCard(){
    if(style1=="flipdivProjectCards"){
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
                <img className="ProjectCard__pt1__img" src={Image}/>
                <h2 className="ProjectCard__pt1__h2">{Title}</h2>
            </div>
            <div className={style2+" "+stylesCards.ProjectCard__pt2}>
                <h2 className={stylesCards.ProjectCard__pt2__h2}>{Title}</h2>
                <p className={stylesCards.ProjectCard__pt2__p}>{Text}</p>
                <button className={stylesCards.ProjectCard__pt2__btn} onClick={flipCard}>Mas informacion</button>
            </div>
            <div className={style3 +" "+stylesCards.ProjectCard__pt3}>
                <div className={stylesCards.ProjectCard__pt3__div1}>
                    <p>Parte oculta parte oculta parte oculta</p>
                    <button className='' onClick={flipCard}>vlver</button>
                </div>
                <div className={stylesCards.ProjectCard__pt3__div2}>
                    <p>div 2 dos div dos div div 2 dos div dos div div 2 dos div dos div div 2 dos div dos div div 2 dos div dos divdiv 2 dos div dos divs</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard