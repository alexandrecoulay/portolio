import React, { useState } from "react";
import FixedMenu from "./FixedMenu";
import FixedMenuStyle from "./Menu.module.scss";
import styles from "@/styles/all.module.scss";
import { useTranslation, languageList } from "@/context/Localization";
import Svg from "../svg";
import { RoundedIcon } from "../assets";
import { cdnbaseurl } from "@/services/constante";
import { classNames } from "@/services";

type sectionProps = {
    size: number;
    displayText: boolean;
}

function ChangeLanguages({ size, displayText }: sectionProps) {

    const { t, setLanguage, currentLanguage } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <span onClick={() => setIsModalOpen(true)} className={classNames([
                styles.row,
                styles.pointer,
                styles.hover
            ])}>{displayText && `${currentLanguage.code}`} <Svg className={classNames([
                styles.reverse,
                isModalOpen ? styles.active : undefined
            ])} size={size} margin={displayText ? 0 : 5} name="chevron-down" /></span>
            {
                <FixedMenu isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    {
                        languageList.map((l, index) => <span
                            onClick={() => setLanguage(l)}
                            key={index}
                            className={`${styles.row} ${l.locale === currentLanguage.locale ? FixedMenuStyle.selected : ""} ${styles.justify_center} ${styles.full_width} ${styles.padding_10} ${styles.border_bottom} ${styles.pointer} ${styles.hover}`}>
                            <RoundedIcon size={22} src={`${cdnbaseurl}/assets/icons/flags/${l.locale}.png`} /> {l.language}
                        </span>
                        )
                    }
                    <span onClick={() => setIsModalOpen(false)} className={`${styles.row} ${styles.justify_center} ${styles.full_width} ${styles.padding_10} ${styles.pointer} ${styles.hover}`}>{t("save")}</span>
                </FixedMenu>
            }
        </div>
    )
}

export default ChangeLanguages;