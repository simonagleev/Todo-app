import React from "react";
import './home-btn.css';
import HomeIcon from '../../../attachments/img/home-icon.svg';
import HomeIconDark from '../../../attachments/img/home-icon-dark.svg';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../../redux/slices/setting-slice";


export const HomeBtn = () => {

    const isThemeChecked = useSelector(isThemeCheckedSelector)

    return (
        <div className={'home-btn'}>
            <Link ClassName={'link'} to={'/'}>
                {isThemeChecked ? <img className={'link-img'} src={HomeIconDark}/> : <img className={'link-img'} src={HomeIcon}/>}
            </Link>
        </div>
    )
}