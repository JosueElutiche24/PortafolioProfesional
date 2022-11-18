import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particulario_config from "./particulario.config.json"
import stylesParticles from "../../styles/modules/NavMenu.module.css"

function Particulario(){
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log("rosa");
    }, []);

    return (
            <Particles id={stylesParticles.tsparticles} init={particlesInit} loaded={particlesLoaded} options={particulario_config}/>
    );
};



export default Particulario;