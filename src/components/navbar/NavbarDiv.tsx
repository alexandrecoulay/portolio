import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "@/services";

function NavbarDiv({ children, navLinks = false }: React.PropsWithChildren<{
    navLinks?: boolean;
}>) {
    return (
        <div className={classNames([
            styles.division,
            navLinks ? styles.navLinks : ''
        ])}>
            { children }
        </div>
    )
}

export default NavbarDiv;