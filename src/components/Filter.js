import React from 'react';

const Filter = props => {
  return (
    <form >
      <div>
        filter shown with <input value={props.filterName} onChange={props.onChangeFilterName}/>
      </div>
    </form>
  );
}

export default Filter;