import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const EditToDoCard = ({MyToDoList, id, editToDoList, onClose}) => {

    const editableCard = MyToDoList.find(item => item.id === id);
   

    const [inputs, setInputs] = useState({
        name: editableCard.name,
        description: editableCard.description,
        status: editableCard.status,
        id: editableCard.id
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        editToDoList(inputs, id);
    }
    return (
        <div className='my-4 editToDoCard position-relative'>
            <div className='position-absolute m-2' style={{top: '0px', right: '0px'}}>
                <Icon.XCircle onClick={() => {onClose(-1)}}></Icon.XCircle>
            </div>
            <form onSubmit={handleSubmit} className='w-100'>
                <label className='form-label mt-2'>
                    Name:
                </label>
                <input
                        className="form-control"
                        type="text"
                        value={inputs.name}
                        onChange={handleChange}
                        name="name"
                        id="toDoName"
                    />

                <label className='form-label mt-2'>
                    Description:
                </label>
                <textarea
                        className="form-control"
                        type="text"
                        value={inputs.description}
                        onChange={handleChange}
                        name="description"
                        id="toDoDescription"
                    />

                <label className='form-label mt-2'>
                    Status:
                </label>
                <select
                        value={inputs.status}
                        className="form-select"
                        onChange={handleChange}
                        name='status'
                    >
                        <option value="Completed">Completed</option>
                        <option value="InComplete">Not Completed</option>
                    </select>

                <input type="submit" value="Submit" className="btn btn-todo mt-4" />
            </form>
        </div>
    );
};

export default EditToDoCard;