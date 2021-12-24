import React from "react";
import './setting-item.css';
import {SwitcherButton} from "./switcher-button/switcher-button";
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../redux/slices/setting-slice";
import {ClearAllBtn} from "../ui/clear-all-btn/clear-all-btn";


export const SettingItem = () => {

    const isThemeChecked = useSelector(isThemeCheckedSelector);

    const settingItemStl = isThemeChecked ? 'dark-text' : null;

    return (
      <div className={'setting-item-container'}>
        <div className={'setting-item '}>
          <div className={'setting-item-text ' + settingItemStl}>
            Dark mode
          </div>
          <SwitcherButton />
        </div>
        <div className={'clear-section ' + settingItemStl}>

            <ClearAllBtn/>

        </div>
      </div>

    )
}