import './App.css';
import React from "react";
import {Routing} from "./routing";
import {useSelector} from "react-redux";
import {isThemeCheckedSelector} from "./redux/slices/setting-slice";


export const App = () => {
                                        // Переключение темы
    const isThemeChecked = useSelector(isThemeCheckedSelector);
    const appStl = isThemeChecked ? 'dark' : null;
                                                 //
    return (
      <div className={"app " + appStl}>
          <Routing />
      </div>
    )
}

