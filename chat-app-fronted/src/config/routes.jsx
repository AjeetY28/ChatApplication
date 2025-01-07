import React from 'react'
import App from '../App'
import { Routes,Route } from 'react-router'
const AppRoutes =()=>{
    return(
        <Routes>
        <Route path='/' element={<App />} />
        <Route path='/chat' element={<h1>This is chat app</h1>} />
        <Route path='/about' element={<h1>This is about page</h1>} />
        <Route path='/*' element={<h1>404 Not Found</h1>} />
      </Routes>
    );
};

export default AppRoutes;