import React from 'react';

const PersonFrom = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          name: <input value={props.newName} onChange={props.inputOnChange}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.inputNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={props.addNewPerson} >add</button>
        </div>
    </form>
  );
}

export default PersonFrom;