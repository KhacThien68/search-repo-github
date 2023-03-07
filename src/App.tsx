import React from 'react';
import './App.css';
import Layout from './layouts';
import RenderRoute from './router/RenderRoute';

function App() {
  return (
    <Layout>
      <RenderRoute />
    </Layout>
  );
}

export default App;
