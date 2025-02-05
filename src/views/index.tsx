"use client"
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import dayjs from "dayjs";

import { useTranslation } from "@/context/Localization";
import AnimatedFadeInUp from "@/components/animations/AnimatedFadeInUp";
import Link from "@/components/link";
import SvgElement from "@/components/svg";
import PreviewModal from "@/components/preview/PreviewModal";
import { cdnbaseurl, email } from "@/services/constante";
import { NavbarElement } from "@/components/navbar";
import { classNames } from "@/services";

import { skills_fr, skills_en } from "@/services/skills";
import { experiences_fr, experiences_en } from "@/services/experiences";
import { aboutme_en, aboutme_fr } from "@/services/aboutme";
import { RoundedIcon } from "@/components/assets";

function HomePage() {

    const { t, currentLanguage } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewUrl, setPreviewUrl] = useState('');
    const [experiences, setExperiences] = useState(currentLanguage.code === "fr" ? experiences_fr : experiences_en);
    const [skills, setSkills] = useState(currentLanguage.code === "fr" ? skills_fr : skills_en);
    const [aboutMe, setAboutMe] = useState(currentLanguage.code === "fr" ? aboutme_fr : aboutme_en);

    useEffect(() => {
        setExperiences(currentLanguage.code === "fr" ? experiences_fr : experiences_en);
        setSkills(currentLanguage.code === "fr" ? skills_fr : skills_en);
        setAboutMe(currentLanguage.code === "fr" ? aboutme_fr : aboutme_en);
    }, [currentLanguage]);

    const easing = [0.6, -0.05, 0.01, 0.99];

    const listItemAnimation = {
        initial: {
            x: -10,
            opacity: 0,
            transition: { duration: 0.6, ease: easing }
        },
        whileInView: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easing
            }
        },
        viewport: {
            once: true
        }
    };

    const handlePreview = (url: string) => {
        setPreviewUrl(url);
        setIsModalOpen(true);
    };

    const handleGoDown = () => {
        window.location.href = `#about`;
    };

    return (
        <section className="container">
            <NavbarElement>
                <Link disable href="#hero" >
                    <Image width={170.16} height={30.16} src={`${cdnbaseurl}/assets/logos/black.png`} alt="app-logo" />
                </Link>
            </NavbarElement>
            <section className="presentation">
                <section id="hero">
                    <h1 className="title-large">Alexandre Coulay</h1>
                    <p className="title-medium">{t("subtitle")}</p>
                    <SvgElement onClick={handleGoDown} pointer hover className="bottom" name="chevron-down" size={25} />
                </section>

                <section id="about">
                    <h2>{t("about_me")}</h2>
                    <AnimatedFadeInUp>
                        <div className="item" dangerouslySetInnerHTML={{ __html: aboutMe }} >
                        </div>
                    </AnimatedFadeInUp>
                </section>

                <section id="skills">
                    <h2>{t("skills")}</h2>
                    <AnimatedFadeInUp>
                        <div className="skills-content">
                            {
                                skills.map((category, idx) => (
                                    <div key={idx} className="skills-item">
                                        <h3>{category.title}</h3>
                                        {category.options.map((section, idx) => (
                                            <div key={idx}>
                                                <h4>{section.title}</h4>
                                                <ul>
                                                    {section.options.map((option, idx) => (
                                                        <li key={idx}>
                                                            {option.bold ?
                                                                option.title.split(" ").map((word, i) =>
                                                                    option.bold?.map(w => w.toLocaleLowerCase()).includes(word.toLocaleLowerCase()) ?
                                                                        <strong key={i}>{word} </strong> :
                                                                        <span key={i}>{word} </span>)
                                                                :
                                                                <span>{option.title}</span>
                                                            } {option.skills && `: `}
                                                            {
                                                                option.skills && option.skills.map((skill, index) => (
                                                                    <>
                                                                        {skill.title.split(' ').map((word, i) =>
                                                                            skill.bold.map(w => w.toLocaleLowerCase()).includes(word.toLocaleLowerCase()) ? <strong key={i}>{word} </strong> :
                                                                                <span key={i}>{word} </span>
                                                                        )}
                                                                        {option.skills && index < option.skills.length - 1 && '- '}
                                                                    </>
                                                                ))
                                                            }</li>
                                                    ))}

                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                        </div>
                    </AnimatedFadeInUp>
                </section>

                <section id="side-projects">
                    <h2>{t("side-projects")}</h2>
                    <div className="timeline">
                        {
                            experiences.filter(e => e.sideProject === true).map((experience, index) => (
                                <AnimatedFadeInUp key={`exp-${experience.company}-${index}`}>
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">{experience.date}</div>
                                        <div className="timeline-content">
                                            <h3>{experience.company} {experience.company.trim().length > 0 && "-"} {experience.title}</h3>
                                            {experience.website && <div className="website"><RoundedIcon size={25} src={`${experience.website}/favicon.ico`} /> <button onClick={() => handlePreview(experience.website)}>{experience.website}</button></div>}
                                            <p>{experience.contexte}</p>
                                            <motion.ul {...listItemAnimation}>
                                                {
                                                    experience.realisations.map((tech, techIndex) => (
                                                        <motion.li
                                                            key={`real-${experience.company}-${techIndex}`}
                                                            {...listItemAnimation}
                                                            transition={{
                                                                ...listItemAnimation.whileInView.transition,
                                                                delay: index * 0.1
                                                            }}
                                                        >
                                                            {tech}
                                                        </motion.li>
                                                    ))
                                                }
                                            </motion.ul>
                                            <div className="timeline-footer">
                                                <div>
                                                    {
                                                        experience.technologies.map((tech, index) => (
                                                            <span key={index} className="timeline-technologies">{tech}{index !== experience.technologies.length - 1 ? ", " : ""}</span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedFadeInUp>
                            ))
                        }
                    </div>
                    <h2>{t("experiences")}</h2>
                    <div className="timeline">
                        {
                            experiences.filter(e => e.sideProject === false).map((experience, index) => (
                                <AnimatedFadeInUp key={`exp-${experience.company}-${index}`}>
                                    <div className={classNames(["timeline-item"])}>
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">{experience.date}</div>
                                        <div className="timeline-content">
                                            <h3>{experience.company} {experience.company.trim().length > 0 && "-"} {experience.title}</h3>
                                            {experience.website && <button onClick={() => handlePreview(experience.website)}>{experience.website}</button>}
                                            <p>{experience.contexte}</p>
                                            <motion.ul {...listItemAnimation}>
                                                {
                                                    experience.realisations.map((tech, techIndex) => (
                                                        <motion.li
                                                            key={`real-${experience.company}-${techIndex}`}
                                                            {...listItemAnimation}
                                                            transition={{
                                                                ...listItemAnimation.whileInView.transition,
                                                                delay: index * 0.1
                                                            }}
                                                        >
                                                            {tech}
                                                        </motion.li>
                                                    ))
                                                }
                                            </motion.ul>
                                            <div className="timeline-footer">
                                                <div>
                                                    {
                                                        experience.technologies.map((tech, index) => (
                                                            <span key={index} className="timeline-technologies">{tech}{index !== experience.technologies.length - 1 ? ", " : ""}</span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedFadeInUp>
                            ))
                        }
                    </div>
                </section>
                <section id="contact">
                    <h2>{t("contact")}</h2>
                    <AnimatedFadeInUp>
                        <div className="item">
                            <p>{t("contact_text")}</p>
                            <div className="contact-buttons">
                                <Link href="https://www.linkedin.com/in/alexandre-coulay/" target="_blank" className="button linkedin">
                                    <SvgElement name="linkedin" size={20} />
                                    LinkedIn
                                </Link>
                                <Link href={`mailto:${email}`} className="button email">
                                    <SvgElement name="envelope" size={20} />
                                    {t("email")}
                                </Link>
                            </div>
                        </div>
                    </AnimatedFadeInUp>
                </section>
            </section>

            <footer>
                <span>© {dayjs().year()} Alexandre COULAY</span>
            </footer>

            <PreviewModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                url={previewUrl}
            />
        </section>
    )
}

export default HomePage;