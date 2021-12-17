import React from "react";
import './done-btn.css';
import { useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../../redux/slices/setting-slice";



export const DoneBtn = ({onClick}) => {
    const isThemeChecked = useSelector(isThemeCheckedSelector);
    const btnStl = isThemeChecked ? 'btn-dark' : null;

    return (
        <div className={'done-btn'}>
            <button
                className={btnStl}
                onClick={onClick}
            >Done</button>
        </div>
    )
}