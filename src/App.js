import logo from './logo.svg';
import './App.css';
import React from "react";
import ProfilePhoto from "./profile/ProfilePhoto";
import FullName from "./profile/FullName";
import Address from "./profile/Address";
import './App.css';
function App() {
  return (
    <div>
      <div className='Profile'><ProfilePhoto /></div>
      <div className='full-name'><FullName /></div>
      <div className='address'><Address /></div>
    </div>
  );
}

export default App;
