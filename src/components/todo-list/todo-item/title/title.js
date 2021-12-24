import React from "react";
import './title.css';
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../../../redux/slices/setting-slice";


export const Title = ({text, isToggle}) => {
    const isThemeChecked = useSelector(isThemeCheckedSelector)
    const isToggleStl = isToggle ? 'task-is-done' : ''

    const titleStl = isThemeChecked ? 'dark' : ''
    return (
        <div className={'title ' + titleStl + isToggleStl}>
            {text}
        </div>
    )
}