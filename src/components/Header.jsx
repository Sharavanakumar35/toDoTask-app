import React from 'react';
import { useState } from 'react';

const Header = ({length, addToDoList}) => {


    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.status = 'InComplete'
        inputs.id = length;
        addToDoList(inputs);
        console.log(inputs);
    }

    return (
      <>
        <div className="d-flex justify-content-center my-4">
          <h3 className="display-3" style={{ color: "#13ad89" }}>
            My ToDo
          </h3>
        </div>
        <br></br>
        <div className="d-flex justify-content-center mt-2">
          <form className='d-flex justify-content-between w-75' onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={inputs.toDoName}
              onChange={handleChange}
              id="todoname"
              placeholder="ToDoName"
              className='form-control ms-2'
            />
            <input
              type="text"
              name="description"
              value={inputs.toDoDescription}
              onChange={handleChange}
              id="tododescription"
              placeholder="ToDoDescription"
              className='form-control ms-2'
            />
            <input type="submit" value="Submit" className="btn btn-todo ms-2" />
          </form>
        </div>
      </>
    );
};

export default Header;