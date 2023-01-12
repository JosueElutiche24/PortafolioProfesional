import stylesCards from "../../styles/modules/Portfolio.module.css"
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ProjectCard({Title, Description, Image, Collection, ConocimientosEmpleados, Tecnologias, linkGithub, linkView}) {

    const [Visible, setVisible] = useState(false)

function flipCard(){
    setVisible(!Visible)
}

return (
    <>
    <div className={stylesCards.divProjectCards}>
        <div className={stylesCards.ZonaImg}>
            <h2 className={stylesCards.ZonaImg__h2+" tR_medium"}>{Title}</h2>
            <img className={stylesCards.ZonaImg__img} src={Image}/>
        </div>
        <div className={stylesCards.ZonaDesplegable}>
            <div className={stylesCards.ZonaDesplegable_PartVisible}>    
                <h2 className={stylesCards.PVisible__h2+" tR_medium"}>{Title}</h2>
                <p className={stylesCards.PVisible__p+" tR_small"}>{Description}</p>
                <button className={stylesCards.PVisible__btn+" tR_small"} onClick={flipCard}>Mas informacion</button>  
            </div>
        </div>
    </div>

    {Visible == true && 
    <section className={stylesCards.modal}>
        <div className={stylesCards.modal_content}>
            <div className={stylesCards.modal_content_1}>
                <div className={stylesCards.modal_DivImages}>
                    {/* Sector del swiper */}
                    {Collection[0] == "No disponible"?
                    <div className={stylesCards.ImagesNoDispo+" tR_medium"}>
                        <p>No disponible</p>
                    </div>
                    :
                    <Swiper
                    className={stylesCards.Swiper}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    mousewheel={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    {Collection.map((item, index)=>{
                        return(
                            <SwiperSlide key={index} className={stylesCards.Slider}><img src={item}/></SwiperSlide>
                        )
                    })}

                  </Swiper>
                    }
                    {/* Sector del swiper */}

                </div>
                <div className={stylesCards.modal_subContent}>
                    <div className={stylesCards.modal_DivTecnos}>
                        <p className={stylesCards.tecnosTitle+" tR_medium"}>Tecnologías utilizadas</p>
                        <div className={stylesCards.tecnosElements}>
                            {Tecnologias.map((item, index)=>{
                                return <p  className={stylesCards.tecnosElement+" tR_small"} key={index}>{item}</p>
                            })}
                        </div>
                    </div>
                    <div className={stylesCards.modal_DivLinks}>
                            <p className={stylesCards.linksTitle+" tR_medium"}>Enlaces</p>
                    {linkView !== "ModoDes" && <p className={stylesCards.linksEnlaceSitio+" tR_small"}>Visitar sitio : <a href={linkView}>{linkView}</a></p>}
                            <p className={stylesCards.linksEnlaceGit+" tR_small"}>Repositorio en github : <a href={linkGithub}>{linkGithub}</a></p>
                    </div>
                </div>
            </div>
            <div className={stylesCards.modal_content_2}>
                <div className={stylesCards.modal_DivConocimienos}>
                        <p className={stylesCards.ConoTitle+" tR_medium"}>Conocimiento empleado</p>
                        <p className={stylesCards.ConoParragraph}>{ConocimientosEmpleados}</p>
                        <button className={stylesCards.btnClosedProject+" tR_small"} onClick={flipCard}>volver</button>
                </div>
            </div>
        </div>
    </section>}
    </>
  )
}

export default ProjectCard