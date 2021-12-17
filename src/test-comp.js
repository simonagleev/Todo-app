import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {countInput, countMinus, countPlus, countSelector, messageSelector} from "./redux/slices/setting-slice";


export const TestComp = () => {

    const message = useSelector(messageSelector)
    const count = useSelector(countSelector)

    const dispatch = useDispatch()


    const onPlus = () => {
        dispatch(countPlus())
    }

    const onMinus = () => {
        dispatch(countMinus())
    }

    const onInput = () => {
        const payload = {
            count: adder - 0
        }

        dispatch(countInput(payload))
    }

    const [input, setInput] = useState('')

    const [adder, setAdder] = useState('');

    return (
        <div className={'test-comp'}>
            {message}

            <br/>

            {count}
            <button
                onClick={onPlus}
            >+</button>
            <button
                onClick={onMinus}
            >-</button>
            <br/>
            <input
                type="text"
                onChange={(event) => setAdder(event.target.value)}
            />
            <button
                onClick={onInput}
            >Input</button>


            {/*<div>*/}
            {/*    <h3>{input}</h3>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        onChange={(event) => setInput(event.target.value)}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
}