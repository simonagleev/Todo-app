import React from "react";
import './header.css';
import {SettingIcon} from "../ui/setting-icon/setting-icon";
import {HomeBtn} from "../ui/home-btn/home-btn";

export const Header = ({title}) => {

    return (
        <div className={'header '}>
            <h1>{title}</h1>
            {(title) === 'Settings' ? <HomeBtn /> : <SettingIcon />}
        </div>
    )
}