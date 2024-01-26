import React from 'react';
import { Footer } from './Component/Footer';
import Header from './Component/Header';
import Main from "./Component/Main";
import { Routes, Route } from 'react-router-dom';
import { Results } from './Component/Results';
import { Result } from './Component/Result';
function App() {
  return (
    <>
<Header/>


<Routes>
<Route path='/' element={<Main/>}/>
<Route path='results' element={<Results/>}/>
<Route path='result/:id' element={<Result/>}/>
</Routes>

<Footer/>
    </>
  );
}

export default App;
