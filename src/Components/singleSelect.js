import React,{ useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

function SingleSelect (){

  const [sizes, setCompany] = useState(["Open", "High", "Low", "Close", "Volume"]);
  const [selected, setSelected] = useState([]);

  return (
    <div style={{display: "inline-block"}, {float: "right"}}>
      <h3>Select one 👇</h3>
      <Multiselect
        isObject={false}
        options={sizes}
        singleSelect={true}
      />
    </div>
  );
}
export default SingleSelect;
