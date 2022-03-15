import React from "react";
import styles from "./Button.module.scss";

function ButtonAvatar({ onClick, src, alt = "avatar", size = 33 }) {
    return (
        <button className={`${styles.rounded} ${styles.link} ${styles.pointer}`} onClick={onClick}>
            <img style={{
                width: `${size}px`,
                height: `${size}px`  
            }} src={src} alt={alt} />
        </button>
    )
}

export default ButtonAvatar;