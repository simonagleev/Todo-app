import React from "react";
import './trash-btn.css';
import TrashIcon from '../../../attachments/img/trash-icon.svg'


export const TrashBtn = ({onHandler}) => {
    return (
        <div className={'trash-btn'} onClick={onHandler}>
            <img className={'trash-pic'} src={TrashIcon} />
        </div>
    )
}