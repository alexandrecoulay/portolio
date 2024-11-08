import React, { useReducer } from "react";
import { initialState, reducer } from "./Project/Reducer";

export const ProjectContext = React.createContext({
    projects: [],
    dispatch: () => {}
});

export const ProjectContextProvider = ({ children }) => {
    const [projects, dispatch] = useReducer(reducer, initialState)

    return (
        <ProjectContext.Provider value={{projects, dispatch}}>
            { children }
        </ProjectContext.Provider>
    )
}