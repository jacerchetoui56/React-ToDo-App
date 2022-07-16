import React from 'react'

export default function Task({ name, isDone, handleDone, handleDelete, handleModify }) {

    const className = isDone ? 'task done' : 'task'
    return (
        <div className={className} >
            <span>{name}</span>
            <div >
                <button
                    onClick={handleModify}
                    style={{ display: isDone ? 'none' : 'block' }}
                >
                    <i class="modify-btn fa-solid fa-pen"></i>
                </button>
                <button
                    onClick={handleDone}
                    style={{ display: isDone ? 'none' : 'block' }}
                >
                    <i class="fa-solid fa-check done-btn"></i>
                </button>
                <button onClick={handleDelete} >
                    <i class="fa-solid fa-trash delete-btn"></i>
                </button>
            </div>
        </div>
    )
}
