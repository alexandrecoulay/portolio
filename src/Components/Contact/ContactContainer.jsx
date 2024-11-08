import React from "react";
import styles from "./Contact.module.scss";

function ContactContainer({ children, noTitle }) {
    return (
        <section className={styles.container}>
            { noTitle ?? <h1>Contact</h1> }
            <div className={styles.informations}>
                { children }
            </div>
        </section>
    )
}

export default ContactContainer;