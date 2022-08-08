import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChildTwo } from './ChildTwo';
import { ChildOne } from './Childone';
import { UserContextProvider } from './Provider';


function App() {
  return (
    <div className="App">
     <UserContextProvider>
      <ChildOne />
      <ChildTwo />
     </UserContextProvider>
    </div>
  );
}

export default App;
