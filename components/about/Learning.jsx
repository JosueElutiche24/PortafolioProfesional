import styles from "../../styles/modules/Learning.module.css"
import *  as FontAwesome from "react-icons/fa";
import React from "react";

function Learning({Title, Text, Image}){
    return(
        <div className={styles.learningCard}>
                <div className={styles.learningCard__pt1}>
                    <div className={styles.learningCard__pt1__icon}>{React.createElement(FontAwesome[Image])}</div>
                    <h2 className={styles.learningCard__pt1__h2}>{Title}</h2>
                </div>
                <div className={styles.learningCard__pt2}>
                    <h2 className={styles.learningCard__pt2__h2}>{Title}</h2>
                    <p className={styles.learningCard__pt2__p}>{Text}</p>
                </div>
        </div>
    )
}

export default Learning;