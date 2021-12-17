import {combineReducers} from "redux";
import {settingReducer} from "./slices/setting-slice";
import {todoReducer} from "./slices/todo-slice";

export const rootReducer = combineReducers({
    todo: todoReducer,
    setting: settingReducer
})