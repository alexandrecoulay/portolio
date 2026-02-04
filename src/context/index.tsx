"use client"

import { PropsWithChildren } from "react";
import { LanguageProvider } from "./Localization";

interface ProviderProps extends PropsWithChildren {
    initialLang?: string;
}

export default function Provider({ children, initialLang }: ProviderProps) {

    return (
        <LanguageProvider initialLang={initialLang}>
            {children}
        </LanguageProvider>
    )
}