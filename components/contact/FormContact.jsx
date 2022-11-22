import styles from "../../styles/modules/FormContact.module.css"
import { useState } from "react";
import  emailjs from "@emailjs/browser";

export default function FormContact() {
    const [Validacion, setValidacion] = useState([])
    const [ModalActive, setModalActive] = useState(false)
    const [ModalValue, setModalValue] = useState("Valor inicial. Si esta viendo esto, ha ocurrido un error.")

    function btnModal(){
        setModalActive(false)
    }
    function handleSubmit(event){
        let expEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        let form = document.querySelector("."+styles.Form)
        let iName = document.querySelector("."+styles.iName)
        let iEmail = document.querySelector("."+styles.iEmail)
        let iMessage = document.querySelector("."+styles.iMessage)
        let errors  = [];
        event.preventDefault()
        // area de resets
            setValidacion([]);
            iName.classList.remove(styles.errorEncontrado)
            iEmail.classList.remove(styles.errorEncontrado)
            iMessage.classList.remove(styles.errorEncontrado)
        // area de validaciones
        if(iName.value.length < 2){
            iName.classList.add(styles.errorEncontrado)
            errors = [...errors ,"El valor del nombre es incorrecto"];
        }
        if(!expEmail.test(iEmail.value)){
            iEmail.classList.add(styles.errorEncontrado)
            errors = [...errors , "El correo ingresado es incorrecto"]
        }
        if(iMessage.value.length <1){
            iMessage.classList.add(styles.errorEncontrado)
            errors = [...errors , "El mensaje está vacío"];
        }        
        setValidacion([...errors])
        // area de datos exitosos
        if(errors.length == 0){
            emailjs.sendForm("service_iz65pwb","template_8ek38p2",event.target, "BHROj7NfKxy3Xa0ja")
            .then(res =>{
                form.reset()
                setModalActive(true)
                setModalValue("su mensaje se ha enviado con éxito.")})
            .catch(error=>{
                setModalActive(true)
                setModalValue("Su mensaje no se ha podido enviar, ha ocurrido un error.")})
        }
    }
  return (
    <div className={styles.principalDiv}>
        <h3 className={styles.principalTitle+" tR_Xlarge"}>Contáctame</h3>
        <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <label htmlFor="">Nombre: </label>
                <input type="text" className={styles.iName} name="name"></input>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="">Correo: </label>
                <input type="text" className={styles.iEmail} name="email"></input>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="">Mensaje: </label>
                <textarea type="text"  className={styles.iMessage} name="message"></textarea>
            </div>
            <div className={styles.alertDiv}>
                {Validacion.map((item, index)=>{
                    return(<div key={index} className={styles.alert}>
                        <p className={styles.alert_p}>{item}</p>
                        <br/>
                    </div>)
                })}
            </div>
            <input className={styles.btnSend} type="submit" value="Enviar"/>
        </form>
        <FormModal active={ModalActive} estado={ModalValue} btnModal={btnModal}/>
    </div>
  )
}

function FormModal({active, estado, btnModal}) {
  if(active === true)return (
    <div className={styles.Modal}>
        <p className={styles.Modal_P}>{estado}</p>
        <button className={styles.Modal_btn} onClick={btnModal}>Aceptar</button>
    </div>
  )
}