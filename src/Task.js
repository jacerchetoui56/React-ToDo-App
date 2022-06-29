import React from 'react'

export default function Task(props) {

    const className = props.isDone ? 'task done' : 'task'
    return (
        <div className={className} >
            <span>{props.name}</span>
            <div >
                <button
                    onClick={props.handleModify}
                    style={{ display: props.isDone ? 'none' : 'block' }}
                >
                    <i class="modify-btn fa-solid fa-pen"></i>
                </button>
                <button
                    onClick={props.handleDone}
                    style={{ display: props.isDone ? 'none' : 'block' }}
                >
                    <i class="fa-solid fa-check done-btn"></i>
                </button>
                <button onClick={props.handleDelete} >
                    <i class="fa-solid fa-trash delete-btn"></i>
                </button>
            </div>
        </div>
    )
}
