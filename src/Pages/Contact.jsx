import React from "react";
import ContactBox from "../Components/Contact/ContactBox";
import ContactContainer from "../Components/Contact/ContactContainer";
import PageContainer from "../Components/Others/PageContainer";

function Contact() {

    const list = [
        {
            svg: "phone",
            text: "(+prefix) 00 00 00 00 00"
        },
        {
            svg: "discord",
            text: "user#1234"
        },
        {
            svg: "envelope",
            text: <a target="_blank" rel="noopener" href="mailto:email@example.com">email@example.com</a>
        },
        {
            svg: "github",
            text: <a target="_blank" rel="noopener" href="https://github.com/alexandrecoulay">Alexandre Coulay</a>
        },
        {
            svg: "linkedin",
            text: <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/user_id/">Name Surname</a>
        }
    ]
    return (
        <PageContainer>
            <ContactContainer>
                {
                    list.map((l, index) => <ContactBox key={index} svgName={l.svg}>{l.text}</ContactBox>)
                }
            </ContactContainer>
        </PageContainer>
    )
}

export default Contact;