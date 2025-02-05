import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from "@/styles/navbar.module.scss";
import { classNames } from "@/services";
import { ChangeLanguages } from "../menu";
import SvgElement from "../svg";
import { email } from "@/services/constante";
import Link from "../link";
import { useTranslation } from "@/context/Localization";

function NavbarElement({ children }: PropsWithChildren) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 2);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMailto = () => {
        window.location.href = `mailto:${email}`;
    };

    const handleLinkedin = () => {
        window.open(`https://www.linkedin.com/in/alexandre-coulay/`, '_blank');
    }

    const handleGithub = () => {
        window.open(`https://github.com/alexandrecoulay`, '_blank');
    }

    return (
        <header className={classNames([
            styles.navbar,
            isScrolled ? styles.header_scroll : '',
            isMobileMenuOpen ? styles.mobile_open : ''
        ])}>
            <div className={classNames([
                styles.content
            ])}>
                {children}
                <div className={styles.division}>
                    <Link href="#about">
                        {t("about_me")}
                    </Link>
                    <Link href="#skills">
                        {t("skills")}
                    </Link>
                    <Link href="#side-projects">
                        {t("side-projects")}
                    </Link>
                    <Link href="#experiences">
                        {t("experiences")}
                    </Link>
                    <Link href="#contact">
                        {t("contact")}
                    </Link>
                    <div className={styles.onlyMobile}>
                        <div className={styles.division}>
                            <ChangeLanguages size={12} displayText={true} />
                            <SvgElement hover onClick={handleGithub} pointer name="github" size={25} />
                            <SvgElement hover onClick={handleLinkedin} pointer name="linkedin" size={25} />
                            <SvgElement hover onClick={handleMailto} pointer name="envelope" size={25} />
                        </div>
                    </div>
                </div>
                <div className={styles.noMobile}>
                    <div className={styles.division}>
                        <ChangeLanguages size={12} displayText={true} />
                        <SvgElement hover onClick={handleGithub} pointer name="github" size={25} />
                        <SvgElement hover onClick={handleLinkedin} pointer name="linkedin" size={25} />
                        <SvgElement hover onClick={handleMailto} pointer name="envelope" size={25} />
                    </div>
                </div>
                <button
                    className={styles.hamburger}
                    onClick={toggleMobileMenu}
                    aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default NavbarElement;