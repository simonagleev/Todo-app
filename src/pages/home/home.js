import React from "react";
import './home.css';
import {Header} from "../../components/header/header";
import {TodoList} from "../../components/todo-list/todo-list";
import {ButtonAdd} from "../../components/ui/button-add/button-add";


export const Home = () => {
    return (
        <div className={'home'}>
            <div>
                <Header title={'Toduber'}/>
                <TodoList />
            </div>
            <ButtonAdd />
        </div>
    )
}