import React from 'react';

const ToDoCard = ({name, description, status, id, openEdit, deleteToDoList}) => {
    return (
        <div className="card todo-card bg-todo m-2">
            <div className="card-body">
                <div className='d-flex justify-content-between mb-2'>
                    <h5 className="card-title text-left">Name:</h5>
                    <h5 className="card-title text-right"> {name}</h5>
                </div>

                <div className='d-flex justify-content-between mb-2'>
                    <p className="card-text text-left me-4">Description:</p>
                    <p className="card-text description-limit text-right">{description}</p>
                </div>

                <div className='d-flex justify-content-between align-items-baseline mb-2'>
                    <p className="card-text text-left">Status:</p>
                    <form className='text-right'>
                        <select name="status" id="status" value={status} className='form-select text-white' style={{backgroundColor: status === 'Completed' ? '#13ad89' : '#dc3545'}}>
                            <option value={status}>{status === 'InComplete' ? 'Not Completed' : status}</option>
                        </select>
                    </form> 
                </div>
            </div>
            <div className="card-footer d-flex justify-content-end">
                <button className="btn btn-todo me-2" onClick={() => openEdit(id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteToDoList(id)}>Delete</button>
            </div>
        </div>
    );
};

export default ToDoCard;
