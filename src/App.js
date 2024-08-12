import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Section from './pages/Section';
import Layout from './pages/Layout';
import DynamicSection from './pages/[id]';
import Error from './pages/404';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // This effect will only run once, on initial render
    navigate('/');
  }, []); // Add navigate to the dependency array

  return (
    <Routes>
      <Route path='' element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/section' element={<Section />} />
        <Route path='/section/:id' element={<DynamicSection />} />
        <Route path='/*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;