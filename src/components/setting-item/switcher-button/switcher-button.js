import React from "react";
import './switcher-button.css';
import {isThemeCheckedSelector, themeChange} from "../../../redux/slices/setting-slice";
import {useDispatch, useSelector} from "react-redux";


export const SwitcherButton = () => {

    const dispatch = useDispatch()
    const changing = () => {
        dispatch(themeChange())
    }

    const isThemeChecked = useSelector(isThemeCheckedSelector)

    return (
        <div className={'switcher-button'}>
            <div className={'switcher'}>
                <input
                    type="checkbox"
                    onChange={changing}
                    checked={isThemeChecked}
                />
            </div>
        </div>
    )
}