import React,{ Component, useState } from 'react';
import './App.css';
// import InfoTable from './Components/InfoTable';
// import { Multiselect } from 'multiselect-react-dropdown';
import Multiselect from './Components/multiSelect'; 
import SingleSelect from './Components/singleSelect'; 
import Datagraph from './Components/Datagraph'
import MyTable, { Products } from './Components/InfoTable';

function App (){

  return (
    <div>
          <Datagraph />
      <div id="topbar" >
      <Multiselect />
    <SingleSelect />
      </div>
    <MyTable />
    </div>
  );
}
//}

export default App;
