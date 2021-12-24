import React from "react";
import './todo-item.css';
import {TrashBtn} from "../../ui/trash-btn/trash-btn";
import {Title} from "./title/title";
import {TogglerButton} from "./toggler-button/toggler-button";
import {useDispatch} from "react-redux";
import {removeTask, taskDone} from "../../../redux/slices/todo-slice";


export const TodoItem = ({text, isToggle, id}) => {
    const dispatch = useDispatch()

    const changing = (id) => {
        const payload = {
            id: id
        }
        dispatch(taskDone(payload))
    }

    const onRemove = (id) => {
        const payload = {
            id: id
        }

        dispatch(removeTask(payload))
    }

    return (
        <div className={'todo-item'}>
            <TogglerButton
                onHandler={() => changing(id)}
                isToggle={isToggle}
            />
            <Title
              text={text}
              isToggle={isToggle}
            />
            <TrashBtn onHandler={() => onRemove(id)}/>
        </div>
    )
}