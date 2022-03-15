import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../Components/Others/PageContainer";
import SvgList from "../Views/SvgList";

function SvgListHome() {
    const params = useParams();

    const [user_id, setUserID] = useState(params.user_id);

    useEffect(() => {
        setUserID(user_id)
    }, [params.user_id])
    
    return (
        <PageContainer>
            { params.user_id === "alex123" ? <SvgList /> : <h1>Compte interdit</h1> }
        </PageContainer>
    )
}

export default SvgListHome;