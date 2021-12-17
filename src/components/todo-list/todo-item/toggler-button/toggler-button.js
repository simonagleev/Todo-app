import React from "react";
import './toggler-button.css';
import CloseIconDark from '../../../../attachments/img/toggler-close-dark.svg';
import CloseIconLight from '../../../../attachments/img/toggler-close-icon.svg';
import OpenIcon from '../../../../attachments/img/toggler-icon.svg';
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../../../redux/slices/setting-slice";


export const TogglerButton = ({isToggle, onHandler}) => {

    const isThemeChecked = useSelector(isThemeCheckedSelector);
    const CloseIcon = isThemeChecked ? CloseIconDark : CloseIconLight;

    return (
        <div
            onClick={onHandler}
            className={'toggler-button'}
        >
            {(isToggle) ? <img src={CloseIcon}/> : <img src={OpenIcon}/>}
        </div>
    )
}