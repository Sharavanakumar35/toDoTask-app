import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import './App.css'
import MyToDos from './components/MyToDos';
import EditToDoCard from './components/EditToDoCard';
const App = () => {
  
  const [MyToDoList, setMyToDoList] = useState([
    {
        name: 'Office Task - 1',
        description: 'Description of my first task',
        status: 'Completed',
        id: 0
    },
    {
        name: 'Office Task - 2',
        description: 'Description of my second task',
        status: 'InComplete',
        id: 1
    }
  ]);

  const addToDoList = (obj) => {
    setMyToDoList([...MyToDoList, obj]);
  };

  const deleteToDoList = (id) => {
    const updatedList = [...MyToDoList];
    const index = updatedList.findIndex(todo => todo.id === id);
    updatedList.splice(index, 1);
    openEdit(-1);
    setMyToDoList(updatedList);
  };

  const [editIndex, setEditIndex] = useState(-1);

  const openEdit = (id) => {
    setEditIndex(id);
  }

  const editToDoList = (obj, id) => {
    setMyToDoList(prevList => {
        return prevList.map(item => {
            if (item.id === id) {
                return obj;
            } else {
                return item;
            }
        });
    });
};


  return (
    <div className='container'>
      <Header length={MyToDoList.length} addToDoList={addToDoList}/>
      <MyToDos MyToDoList={MyToDoList} openEdit={openEdit} deleteToDoList={deleteToDoList}/>
      {editIndex !== -1 && <EditToDoCard MyToDoList={MyToDoList} id={editIndex} editToDoList={editToDoList} onClose={openEdit} />}
    </div>
  );
};

export default App;
