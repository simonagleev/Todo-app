import React from "react";
import './title.css';
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../../../redux/slices/setting-slice";


export const Title = ({text}) => {
    const isThemeChecked = useSelector(isThemeCheckedSelector);

    const titleStl = isThemeChecked ? 'dark' : null;
    return (
        <div className={'title ' + titleStl}>
            {text}
        </div>
    )
}