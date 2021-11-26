import React,{ useState } from 'react';
// import './App.css';
// import InfoTable from './Components/InfoTable';
import { Multiselect } from 'multiselect-react-dropdown';

function MultiSelect (){

  const [company, setCompany] = useState(["Apple", "IBM", "Microsoft"]);
  const [selected, setSelected] = useState([]);

  return (
    <div style={{display: "inline-block"}, {float: "left"}}>
      <h3>Select 👇</h3>
      <Multiselect
        isObject={false}
        selectedValues={company}
        onSelect={(event) => { selected = event }}
        onRemove={(event) => { selected.setSelected = event }}
        options={company}
      />
    </div>
  );
}
export default MultiSelect;
