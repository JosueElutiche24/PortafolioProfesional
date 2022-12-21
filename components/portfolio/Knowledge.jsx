import Image from "next/image.js";
import {NextIcon} from "../Icons.Svg.jsx";

import styles from "../../styles/modules/Knowledge.module.css"

function Knowledge(){

    return(
        <div className={styles.sectionContainer}>

           <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/react-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>React</p>
                </div>
            </div>

            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/css3-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Css</p>
                </div>
            </div>

            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/nextjs-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Next Js</p>
                </div>
            </div>

            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/express-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Express</p>
                </div>
            </div>

            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/mysql-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>MySql</p>
                </div>
            </div>

            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/nodejs-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Node Js</p>
                </div>
            </div>

            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/typescript-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Typescript</p>
                </div>
            </div>

            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/mongodb-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>MongoDB</p>
                </div>
            </div>

            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/nestjs-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Nest Js</p>
                </div>
            </div>

            <div className={styles.Card}>
                <div className={styles.Faces +" "+styles.Front}>
                    <img src="/icons/tailwind-icon.png"/>
                </div>
                <div className={styles.Faces +" "+styles.Back}>
                    <p>Tailwind</p>
                </div>
            </div>

        </div>
    );
};

export default Knowledge;