import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('add new name...');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data);
    })
  },[]);

  const handleSubmit = event => {
    event.preventDefault();
  }

  const inputOnChange = event => {
    setNewName(event.target.value);
  }

  const inputNumberChange = event => {
    setNewNumber(event.target.value);
  }

  const onChangeFilterName = event => {
    setFilterName(event.target.value);
  }

  const addNewPerson = () => {
    if(persons.every(p => p.name !== newName)){
      const newObject = {
        name: newName,
        number: newNumber,
      }
  
      setPersons(persons.concat(newObject));
      setNewName('');
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    
  }

  const filteredPersons = (filterName === '') ? persons : 
    persons.filter(p => p.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()));


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterName={filterName} 
        onChangeFilterName={onChangeFilterName}
      />

      <h2>add a new</h2>
      <PersonForm 
        handleSubmit={handleSubmit} 
        inputOnChange={inputOnChange} 
        inputNumberChange={inputNumberChange}
        newName={newName}
        newNumber={newNumber}
        addNewPerson={addNewPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  );
}

export default App;
