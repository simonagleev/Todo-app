import React, {useState} from "react";
import './new-task.css';
import {InputAdd} from "../../components/input-add/input-add";
import {CancelBtn} from "../../components/ui/cancel-btn/cancel-btn";
import {DoneBtn} from "../../components/ui/done-btn/done-btn";
import {TrashBtn} from "../../components/ui/trash-btn/trash-btn";
import {TogglerButton} from "../../components/todo-list/todo-item/toggler-button/toggler-button";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/slices/todo-slice";
import { useHistory } from "react-router-dom";


export const NewTask = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const addingTask = () => {
        const payload = {
            title: inputValue,
        }
        dispatch(addTask(payload))
    }

    const onAddNewTask = () => {
        if (inputValue.trim() === '') {
            alert('Title is empty')
            return
        }
        addingTask()
        history.goBack()
    }

    const [inputValue, setInputValue] = useState('')

    return (
        <div className={'new-task'}>
            <div className={'new-task-nav'}>
                <Link to={'/'}>
                    <CancelBtn />
                </Link>
                <DoneBtn onClick={onAddNewTask} />
            </div>
            <div className={'new-task-body'}>
                <TogglerButton />
                <InputAdd setInputValue={setInputValue} />
                <TrashBtn />
            </div>
        </div>
    )
}