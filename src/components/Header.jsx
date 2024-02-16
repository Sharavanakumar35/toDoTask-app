import React, { useState } from 'react';

const Header = ({ length, addToDoList }) => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: value.trim() ? '' : 'This field is required' }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.keys(inputs).length === 0) {
          setErrors({
            name:  'This field is required' ,
            description:  'This field is required'
        });
          return;
      }
  
        const { name, description } = inputs;

        if (!name.trim() || !description.trim()) {
            setErrors({
                name: !name.trim() ? 'This field is required' : '',
                description: !description.trim() ? 'This field is required' : ''
            });
            return;
        }

        // Reset errors
        setErrors({});

        inputs.status = 'InComplete';
        inputs.id = length;
        addToDoList(inputs);
    };

    return (
      <>
        <div className="d-flex justify-content-center my-4">
          <h3 className="display-3" style={{ color: "#13ad89" }}>
            My ToDo
          </h3>
        </div>
        <br />
        <div className="d-flex justify-content-center mt-2">
          <form
            className="d-flex justify-content-between w-75"
            onSubmit={handleSubmit}
          >
            <div className='w-100 ms-2'>
              <input
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                id="todoname"
                placeholder="ToDoName"
                className={`form-control ${errors.name && "is-invalid"}`}
              />
              {errors.name && (
                <div className="invalid-feedback position-absolute">{errors.name}</div>
              )}
            </div>
            <div className='w-100 ms-2'>
              <input
                type="text"
                name="description"
                value={inputs.description || ""}
                onChange={handleChange}
                id="tododescription"
                placeholder="ToDoDescription"
                className={`form-control ${
                  errors.description && "is-invalid"
                }`}
              />
              {errors.description && (
                <div className="invalid-feedback position-absolute">{errors.description}</div>
              )}
            </div>
            <input type="submit" value="Submit" className="btn btn-todo ms-2" />
          </form>
        </div>
      </>
    );
};

export default Header;
