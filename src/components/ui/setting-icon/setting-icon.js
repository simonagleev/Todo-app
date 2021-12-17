import React from "react";
import './setting-icon.css';
import SetIcon from '../../../attachments/img/settings-icon.svg';
import SetIconDark from '../../../attachments/img/setting-icon-dark.svg';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../../redux/slices/setting-slice";



export const SettingIcon = () => {

    const isThemeChecked = useSelector(isThemeCheckedSelector);

    return (
        <div className={'setting-icon'}>
            <Link className={'link'} to={'/settings'}>
                {isThemeChecked ? <img className={'link-img'} src={SetIconDark}/> : <img className={'link-img'} src={SetIcon} />}
            </Link>
        </div>
    )
}