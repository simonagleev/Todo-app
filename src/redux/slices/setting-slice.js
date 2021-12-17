import {createSlice} from "@reduxjs/toolkit";



export const settingSlice = createSlice({
    name: 'settingSlice',
    initialState: {
        message: 'TEST hello world',
        count: 1,
        isThemeChecked: false,
    },
    reducers: {
        countPlus: (state) => {
            state.count += 1
        },
        countMinus: (state) => {
            state.count -= 1
        },
        countInput: (state, action) => {
            state.count += action.payload.count
        },

        themeChange: (state) => {
            state.isThemeChecked = !state.isThemeChecked
        }
    }
})


/*
* Selectors
* */
export const messageSelector = (store) => store.setting.message
export const countSelector = (store) => store.setting.count
export  const isThemeCheckedSelector = (store) => store.setting.isThemeChecked


/*
* Actions
* */
export const {
    countPlus,
    countMinus,
    countInput,
    themeChange,
} = settingSlice.actions




/*
* Reducer
* */
export const settingReducer = settingSlice.reducer