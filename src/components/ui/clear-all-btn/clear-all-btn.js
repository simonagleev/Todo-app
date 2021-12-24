import React from "react";
import './clear-all-btn.css';
import {useDispatch, useSelector} from "react-redux";
import {clearAllCompletedTasks, clearAllTasks} from "../../../redux/slices/todo-slice";
import {useHistory} from "react-router-dom";
import {isThemeCheckedSelector} from "../../../redux/slices/setting-slice";


export const ClearAllBtn = ({}) => {
  const isThemeChecked = useSelector(isThemeCheckedSelector);
  const clearAllBtnStl = isThemeChecked ? 'dark-mode-btn' : null;

  const history = useHistory()
  const dispatch = useDispatch()
  const clearingAll = () => {
    dispatch(clearAllTasks())

    history.push("/")
  }
  const clearingAllCompleted = () => {
    dispatch(clearAllCompletedTasks())

    history.push("/")
  }


  return (
    <div className={'clear-all-btn'}>
      <div>
        <button
          className={'clear-btn ' + clearAllBtnStl}
          onClick={() => clearingAll()}
        >
          Clear all
        </button>
      </div>
      <div>
        <button
          className={'clear-btn ' + clearAllBtnStl}
          onClick={() => clearingAllCompleted()}
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}