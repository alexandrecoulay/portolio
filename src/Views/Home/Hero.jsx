import React from "react";
import Icons from "../../Components/Icons/Icons";
import styles from "./Hero.module.scss";

function Hero() {
    
    return (
        <div className={styles.hero}>
            <h1>Mon portfolio</h1>
            <div className={styles.bottom}>
                <Icons name="chevron-left" />
            </div>
        </div>
    )
}

export default Hero;