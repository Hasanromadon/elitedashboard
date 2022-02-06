import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {

  const [close, setClose] = useState(false);

  const handleSidebar = ()=> {
    setClose(!close);
    console.log('tes');
  };

  return (
    <div className='flex items-start'>
      <Sidebar handleSidebar={handleSidebar}  close={close}/>
      <Main handleSidebar={handleSidebar} close={close}/>
    </div>
  );
}

export default App;
