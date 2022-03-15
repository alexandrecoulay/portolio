import { Flex } from "@chakra-ui/react";
import React from "react";
import Icons from "../Components/Icons/Icons";
import svgList from "../Components/Icons/SvgList";

function SvgList() {

    const copyToClipboard = async (name) => {
        if(typeof navigator !== "undefined") {
            await navigator.clipboard.writeText(`${name}`);
            alert("copié");
        } 
    }

    return (
        <Flex direction="column" wrap="wrap" gap={5} alignContent="space-evenly" justifyContent="space-around" w={"100%"} height="100vh">
            {
                svgList.map((svg, index) => 
                    <div key={index} onClick={() => copyToClipboard(svg.name)} style={{
                        padding: 10,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10
                    }}>
                        <span style={{
                            cursor: "pointer"
                        }} >{svg.name}</span>
                        <Icons hover pointer name={svg.name} size={22}/>
                    </div>
                )
            }
        </Flex>
    )
}

export default SvgList;