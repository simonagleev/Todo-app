import React from "react";
import './todo-list.css';
import {TodoItem} from "./todo-item/todo-item";
import {useSelector} from "react-redux";
import {todoListSelector} from "../../redux/slices/todo-slice";


export const TodoList = () => {

    const tasks = useSelector(todoListSelector);

    return (
        <div className={'todo-list'}>
            {
                tasks.map((item, index) => <TodoItem
                    text={item.title}
                    isToggle={item.isDone}
                    id={item.id}/>)
            }
        </div>
    )
}