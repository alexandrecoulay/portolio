import React from "react";
import Icons from "../Icons/Icons";
import styles from "./Contact.module.scss";

function ContactBox({ children, svgName }) {

    return (
        <div className={styles.box}>
            <div className={styles.icon}>
                <Icons name={svgName} noColor size={35} />
            </div>
            <span>{children}</span>
        </div>
    )
}

export default ContactBox;