import React, { useState } from 'react';
import ToDoCard from './ToDoCard';

const MyToDos = ({MyToDoList, openEdit, deleteToDoList}) => {

    const [selectedOptions, setSelectedOptions] = useState('All');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOptions(value);
    };    

    return (
      <>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-between">
          <h5>My Todos</h5>

          <div className="d-flex align-items-baseline">
            <h5 className="me-2">Status Filter: </h5>
            <form>
              <select
                value={selectedOptions}
                onChange={handleChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="InComplete">Not Completed</option>
              </select>
            </form>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="todo-container">
          <div className="d-flex">
            {MyToDoList.filter((item) =>
              selectedOptions === "All" ? true : item.status === selectedOptions
            ).map((todo, index) => {
              return (
                <ToDoCard
                  key={index}
                  name={todo.name}
                  description={todo.description}
                  status={todo.status}
                  openEdit={openEdit}
                  deleteToDoList={deleteToDoList}
                  id={todo.id}
                />
              );
            })}
          </div>
        </div>
      </>
    );
};

export default MyToDos;