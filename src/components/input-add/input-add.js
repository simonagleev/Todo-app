import React, {useState} from "react";
import './input-add.css';
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../redux/slices/setting-slice";



export const InputAdd = ({setInputValue}) => {

    const isThemeChecked = useSelector(isThemeCheckedSelector);
    const inputAddStl = isThemeChecked ? 'dark input-dark' : null;


    return (
        <div className={'input-add ' + inputAddStl}>
            <input
                className={'input ' + inputAddStl}
                type="text"
                placeholder="What do you want to do?"
                autoFocus
                onChange={event => setInputValue(event.target.value)}
            />
        </div>
    )
}