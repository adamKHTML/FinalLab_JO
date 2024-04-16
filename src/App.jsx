// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import Dashboard from './Dashboard';
import FormLogin from './FormLogin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Admin from './AdminPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/formulaire"
          element={<FormLogin />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />
      </Routes>
    </Router>
  )
}

export default App
