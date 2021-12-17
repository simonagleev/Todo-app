import React from "react";
import './cancel-btn.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../../redux/slices/setting-slice";


export const CancelBtn = () => {

    const isThemeChecked = useSelector(isThemeCheckedSelector);
    const btnStl = isThemeChecked ? 'btn-dark' : null;

    return (
        <div className={'cancel-btn ' + btnStl}>
            <Link ClassName={'link'} to={'/'}>
                <button className={btnStl}>Cancel</button>
            </Link>
        </div>
    )
}