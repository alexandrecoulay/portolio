import React, { useEffect } from "react";
import { Button, Stack, Text } from "@chakra-ui/react"
import PageContainer from "../Components/Others/PageContainer";
import Rythm from 'rythm.js'
import audioUrl from "../Music/music.mp3";

function Sound() {
    // https://github.com/bnp-aswin/RythmJs
    const rythm = new Rythm();

    rythm.setMusic(audioUrl)
    rythm.addRythm('pulse1', 'pulse', 0, 10)
    rythm.addRythm('fontSize1', 'fontSize', 0, 2)
    rythm.addRythm('borderColor', 'neon', 0, 10, {
        from: [0,0,255],
        to:[255,0,255]
    })
    rythm.addRythm('borderColor2', 'neon', 0, 10, {
        from: [255,0,255],
        to:[84,255,44]
    })
    rythm.addRythm('fontColor', 'fontColor', 0, 10, {
        from: [0,0,255],
        to:[255,0,255]
    })

    rythm.addRythm('vanish', "vanish", 0, 1)
    rythm.addRythm('kern', "kern", 0, 10)
    rythm.addRythm('swing', "swing", 0, 10)
    rythm.addRythm('twist', "twist", 0, 10)
    rythm.addRythm('chakra-container', "color", 0, 10, {
        from: [0,0,0],
        to:[255,255,255]
    })
    rythm.addRythm("css-codw3n", "jump", 0, 10)
    rythm.addRythm("chakra-button", "radius", 0, 50, true)

    useEffect(() => {
        rythm.start()
    }, [])

    const start = () => {
        rythm.start()
    }

    const stop = () => {
        rythm.stop(true)
    }

    return (
        <PageContainer >
            <Stack marginBottom={"20px"} direction={"row"} flexFlow="wrap" alignItems={"center"} gap="20px">
                <Button className="borderColor" onClick={() => start()}>
                    Commencer
                </Button>
                <Button className="borderColor2" onClick={() => stop()}>
                    Stop
                </Button>
            </Stack>
            <Stack fontWeight={900} fontSize={"50px"} marginBottom={"10px"} direction={"row"} flexFlow="wrap" alignItems={"center"} gap="10px">
                <Text className="pulse1">ON</Text>
                <Text className="kern">AIME</Text>
                <Text className="vanish">LA</Text>
                <Text className="fontColor">MUSIC</Text>
                <Text className="swing">MON</Text>
                <Text className="twist">GARS</Text>
            </Stack>
        </PageContainer>
    )
}

export default Sound;