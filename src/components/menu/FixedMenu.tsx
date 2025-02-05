import { AnimatePresence, motion } from "motion/react";
import { PropsWithChildren } from "react";

import styles from "./PreviewModal.module.scss"

type SectionProps = PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
}>

const FixedMenu = ({ isOpen, onClose, children }: SectionProps) => {

    return (
        <AnimatePresence initial={false}>
            {isOpen ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={styles.modalOverlay}
                    onClick={onClose}>
                    <div onClick={e => e.stopPropagation()} className={styles.modalContent}>
                    { children }
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default FixedMenu;