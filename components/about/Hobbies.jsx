import styles from "../../styles/modules/Hobbies.module.css"

function Hobbies({Title, Text, Image}) {
  return (
    <div className={styles.HobbieCard}>
    <div className={styles.H_faces +" "+ styles.HobbieCard__front}>
        <h2 className={styles.HobbieCard__front__h2+" tR_medium"}>{Title}</h2>
        <img className={styles.HobbieCard__front__img} src={Image}/>
    </div>
    {/* <div className={styles.H_faces +" "+ styles.HobbieCard__back}> */}
    <div className={`${styles.H_faces} ${styles.HobbieCard__back}`}>
        <h2 className={styles.HobbieCard__back__h2+" tR_medium"}>{Title}</h2>
        <p className={styles.HobbieCard__back__p+" tR_small"}>{Text}</p>
    </div>
</div>
  )
}

export default Hobbies