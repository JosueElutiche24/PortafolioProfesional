import 'swiper/css';
import "swiper/css/mousewheel"
import "swiper/css/navigation"
import {DiJsBadge, DiNodejsSmall, DiCss3, DiReact} from "react-icons/di"
import {SiElectron}from "react-icons/si"

import styles from "../../styles/modules/Knowledge.module.css"

import { Mousewheel, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Knowledge(){
    return (
    
        <Swiper
        modules={[Mousewheel, Navigation]}
        navigation
        mousewheel={{invert: false,}}
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <div className={styles.Slider}>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <DiJsBadge className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <DiNodejsSmall className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <DiCss3 className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <DiReact className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <SiElectron className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.swipeSlider}>
                        <DiJsBadge className={styles.swipeSlider__icon}/>
                    </div>
                </SwiperSlide>
        </div>
        </Swiper>
  );

};

export default Knowledge;