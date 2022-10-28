import 'swiper/css';
import "swiper/css/mousewheel"
import "swiper/css/navigation"
import {DiJsBadge, DiNodejsSmall, DiCss3, DiReact} from "react-icons/di"
import {SiElectron}from "react-icons/si"

import styles from "../../styles/modules/Knowledge.module.css"

import { Mousewheel, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Star from "./Stars";

function Knowledge(){
    return (
    
        <Swiper
        modules={[Mousewheel, Navigation]}
        navigation
        mousewheel={{invert: false,}}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <div className={styles.Slider}>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <div className={styles.swipeSlider__divStars}>
                            <Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#06283D"/>
                        </div>
                        <DiJsBadge className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <div className={styles.swipeSlider__divStars}>
                            <Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#06283D"/>
                        </div>
                        <DiNodejsSmall className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <div className={styles.swipeSlider__divStars}>
                            <Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#06283D"/>
                        </div>
                        <DiCss3 className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <div className={styles.swipeSlider__divStars}>
                            <Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#06283D"/>
                        </div>
                        <DiReact className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <div className={styles.swipeSlider__divStars}>
                            <Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#06283D"/>
                        </div>
                        <SiElectron className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <div className={styles.swipeSlider__divStars}>
                            <Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#DFF6FF"/><Star color= "#06283D"/>
                        </div>
                        <DiJsBadge className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>
        </div>
        </Swiper>
  );

};

export default Knowledge;