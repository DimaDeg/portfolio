import style from './Header.module.scss'
import React from "react";
import {Navigate} from "../nav/Navigate";

export const Header = () => {
    return (
        <div className={style.Header}>
            <Navigate/>
        </div>
    )
}