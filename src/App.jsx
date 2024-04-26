// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import Dashboard from './Dashboard';
import FormLogin from './FormLogin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Admin from './AdminPage';
import Summary from './Components/Summary';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormContent from './Components/FormContent';
import PlayerList from './Components/PlayerList';
import UpdateContent from './Components/UpdateContent';

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
        <Route
          path="/summary"
          element={<Summary />}
        />
        <Route
          path="/content"
          element={<FormContent />}
        />
        <Route
          path="/playersList"
          element={<PlayerList />}
        />
        <Route
          path="/update/:id"
          element={<UpdateContent />}
        />
      </Routes>
    </Router>
  )
}

export default App
