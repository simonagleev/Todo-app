import React from "react";
import './settings.css';
import {Header} from "../../components/header/header";
import {SettingItem} from "../../components/setting-item/setting-item";
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../redux/slices/setting-slice";


export const Settings = () => {
  const isThemeChecked = useSelector(isThemeCheckedSelector)
  const headerStl = isThemeChecked ? 'dark' : null
    return (
        <div className={'settings' + headerStl}>
            <Header title={'Settings'}/>
            <SettingItem />
        </div>
    )
}