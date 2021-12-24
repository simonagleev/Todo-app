import React, {useState} from "react";
import './input-add.css';
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "../../redux/slices/setting-slice";



export const InputAdd = ({setInputValue, onKeyUp}) => {

    const isThemeChecked = useSelector(isThemeCheckedSelector);
    const inputAddStl = isThemeChecked ? 'dark input-dark' : null;
    const onEnterUp = (e) => {
      if (e.keyCode === 13) {
        onKeyUp(e)
        console.log('Enter press');
      }
    }

    return (
        <div className={'input-add ' + inputAddStl}>
            <input
                className={'input ' + inputAddStl}
                type="text"
                placeholder="What do you want to do?"
                autoFocus
                onChange={event => setInputValue(event.target.value)}
                onKeyUp={(e) => {
                  onEnterUp(e)
                }}

            />
        </div>
    )
}