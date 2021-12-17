import React from "react";
import './button-add.css';
import AddIcon from '../../../attachments/img/plus-button.svg';
import AddIconDark from '../../../attachments/img/plus-button-dark.svg';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../../redux/slices/setting-slice";


export const ButtonAdd = () => {

    const isThemeChecked = useSelector(isThemeCheckedSelector);

    return (
        <div className={'button-add'}>
            <Link ClassName={'link'} to={'/new-task'}>
                <img src={isThemeChecked ? AddIconDark : AddIcon}/>
            </Link>
        </div>
    )
}