import 'swiper/css';
import "swiper/css/mousewheel"
import "swiper/css/navigation"
import {DiJsBadge , DiNodejsSmall, DiCss3, DiReact, DiGit} from "react-icons/di"
import {SiElectron, SiTailwindcss}from "react-icons/si"

import styles from "../../styles/modules/Knowledge.module.css"

function Knowledge(){

    return(
        <section className={styles.sectionContainer}>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <DiJsBadge className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>JavaScript</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <DiCss3 className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Css</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <DiReact className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>React JS</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <SiElectron className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Electron</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <DiNodejsSmall className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Node JS</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <DiGit className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Git y Github</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <SiTailwindcss className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Talewin</p>
                </div>
            </div>
        </section>
    );
};

export default Knowledge;