import React from 'react';

const Persons = props => {
  return (
    props.persons.map(p => <p key={p.name}>{`${p.name} ${p.number}`}</p> )
  );
}

export default Persons;