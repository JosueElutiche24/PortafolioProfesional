import styles from "../../styles/modules/Skills.module.css"

function Skills({Title, Text, Image, Num}){

    let delay ={animationDelay: Num+"s"}
    return(
        <>
            <div className={styles.skillCard}>
                    <div className={styles.faces+" "+styles.skillCard__front} style={delay}>
                        <h2 className={styles.skillCard__front__h2}>{Title}</h2>
                        <img className={styles.skillCard__front__img} src={Image}/>
                    </div>
                    <div className= {styles.faces+" "+styles.skillCard__back}>
                        <h2 className={styles.skillCard__back__h2}>{Title}</h2>
                        <p className={styles.skillCard__back__p}>{Text}</p>
                    </div>
            </div>
        </>
    )}
export default Skills;