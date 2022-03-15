import React, { useState } from "react";
import Icons from "../Icons/Icons";
import styles from "./Input.module.scss";

function SearchBar({ onSubmit, placeholder = "Search something ..." }) {
    const [value, setValue] = useState("");

    const keyPress = (code) => {
        if(code === "Enter") return onSubmit(value)
    }
    
    return (
        <div className={`${styles.input_box} ${styles.search_bar}`}>
            <input onKeyDown={(e) => keyPress(e.code)} onChange={(e) => setValue(e.target.value)} value={value} placeholder={placeholder} type="text" name="search" />
            <button onClick={() => onSubmit(value)}><Icons name="magnify" size={20} /></button>
        </div>
    )
}

export default SearchBar;