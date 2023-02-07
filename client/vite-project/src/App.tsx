import { useState } from 'react';
import './App.css';
import { useGetUserDetailsQuery } from './redux/getUsers';

function App() {
  
  const { data , isFetching} = useGetUserDetailsQuery("63dec427e9d5ef89463581a6");

  console.log(data);
  return (
    <div className="App">
     <h1>This is a full stack ecommerce project</h1>
    </div>
  )
}

export default App
