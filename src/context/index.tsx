"use client"

import { PropsWithChildren } from "react";
import { LanguageProvider } from "./Localization";

export default function Provider({ children }: PropsWithChildren) {

    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    )
}