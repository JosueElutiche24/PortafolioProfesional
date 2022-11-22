import React from 'react'
import styles from "../../styles/modules/Footer.module.css"
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer({title}) {
    if(title == "principal-page")return(
        <div className={styles.Footer}>
            <div className={styles.Footer__Pt1}>
                <a className={styles.Footer__Pt1__items} href='https://github.com/JosueElutiche24'><AiFillGithub/></a>
                <p>|</p>
                <a className={styles.Footer__Pt1__items} href='https://www.linkedin.com/in/josue-guzman-754063256'><AiFillLinkedin/></a>
                {/* <p>|</p>
                <a className={styles.Footer__Pt1__items} href='#'><AiFillGithub/></a> */}
            </div>
            <div className={styles.Footer__Pt2}>
                <Link href="/contact"><a className={styles.a+" tR_medium"}>contactame</a></Link>
                <p className={styles.p1}>|</p>
                <p className={styles.p2+" tR_medium"}>Gracias por ver</p>
            </div>
        </div>
    );
    if(title == "contact")return(
        <div className={styles.Footer}>
            <div className={styles.Footer__Pt1}>
                <a className={styles.Footer__Pt1__items} href='https://github.com/JosueElutiche24'><AiFillGithub/></a>
                <p>|</p>
                <a className={styles.Footer__Pt1__items} href='https://www.linkedin.com/in/josue-guzman-754063256'><AiFillLinkedin/></a>
            </div>
            <div className={styles.Footer__Pt2}>
                <p className={styles.p3+" tR_medium"}>Gracias por ver</p>
            </div>
        </div>
    );
    if(title == "more_about_me")return(
        <div className={styles.Footer}>
            <div className={styles.Footer__Pt1}>
                <a className={styles.Footer__Pt1__items} href='https://github.com/JosueElutiche24'><AiFillGithub/></a>
                <p>|</p>
                <a className={styles.Footer__Pt1__items} href='https://www.linkedin.com/in/josue-guzman-754063256'><AiFillLinkedin/></a>
                {/* <p>|</p>
                <a className={styles.Footer__Pt1__items} href='#'><AiFillGithub/></a> */}
            </div>
            <div className={styles.Footer__Pt2}>
                <Link href="/contact"><a className={styles.a+" tR_medium"}>contactame</a></Link>
                <p className={styles.p1}>|</p>
                <p className={styles.p2+" tR_medium"}>Gracias por ver</p>
            </div>
        </div>
    );
}


export default Footer;