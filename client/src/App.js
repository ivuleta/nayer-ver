import React, { Component } from 'react';

import Auth from './components/Auth/Auth';

const App = () => 
{
  let user = null;

  return (
    <div>
         { user ? (<h1>User logged in.</h1>) : <Auth/> }  
    </div>
  )
}

export default App;

