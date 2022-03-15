import React from "react";
import styles from "./Button.module.scss";

function LinkAvatar({ href, src, alt = "avatar", size = 33 }) {
    return (
        <a className={`${styles.rounded} ${styles.link} ${styles.pointer}`} href={href}>
            <img style={{
                width: `${size}px`,
                height: `${size}px`  
            }} src={src} alt={alt} />
        </a>
    )
}

export default LinkAvatar;