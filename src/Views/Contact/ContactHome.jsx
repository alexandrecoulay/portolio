import React from "react";
import ContactBox from "../../Components/Contact/ContactBox";
import ContactContainer from "../../Components/Contact/ContactContainer";

const ContactHome = ({ noTitle }) => {

    const list = [
        {
            svg: "phone",
            text: "(+33) 6 14 42 83 92"
        },
        /*{
            svg: "discord",
            text: "user#1234"
        },*/
        {
            svg: "envelope",
            text: <a target="_blank" rel="noreferrer" href="mailto:contact@alexandrecoulay.fr">contact@alexandrecoulay.fr</a>
        },
        {
            svg: "github",
            text: <a target="_blank" rel="noreferrer" href="https://github.com/alexandrecoulay">Alexandre Coulay</a>
        },
        {
            svg: "linkedin",
            text: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alexandre-coulay/">Alexandre COULAY</a>
        }
    ]

    return (
        <ContactContainer noTitle={noTitle}>
            {
                list.map((l, index) => <ContactBox key={index} svgName={l.svg}>{l.text}</ContactBox>)
            }
        </ContactContainer>
    )
}

export default ContactHome;