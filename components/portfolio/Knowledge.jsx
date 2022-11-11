import {DiNodejsSmall, DiReact, DiGithubBadge} from "react-icons/di"
import {SiElectron, SiTailwindcss, SiExpress, SiBootstrap, SiMysql}from "react-icons/si"
import {NextIcon} from "../Icons.Svg.jsx";

import styles from "../../styles/modules/Knowledge.module.css"

function Knowledge(){

    return(
        <section className={styles.sectionContainer}>
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
                    <SiTailwindcss className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Tailwind</p>
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
                    <SiMysql className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>MySql</p>
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
                    <DiGithubBadge className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Git y Github</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <SiBootstrap className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Bootstrap</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <SiExpress className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Express</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <NextIcon className={styles.Front__icon}/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>NextJS</p>
                </div>
            </div>
        </section>
    );
};

export default Knowledge;