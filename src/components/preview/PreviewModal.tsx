import { classNames } from "@/services";
import Link from "../link";
import styles from "./PreviewModal.module.scss"
import { AnimatePresence, motion } from "motion/react";

type SectionProps = {
    isOpen: boolean;
    onClose: () => void;
    url: string;
};

const PreviewModal = ({ isOpen, onClose, url }: SectionProps) => {

    return (
        <AnimatePresence initial={false}>
            {isOpen ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={styles.modalOverlay}
                    onClick={onClose}>
                    <div className={classNames([
                        styles.modalContent
                    ])} onClick={e => e.stopPropagation()}>
                        <Link href={url} target="_blank">{url}</Link>
                        <button className={styles.closeButton} onClick={onClose}>×</button>
                        <iframe
                            src={url}
                            className={styles.previewFrame}
                            title="Website Preview"
                        />
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default PreviewModal;