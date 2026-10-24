
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={
            isLoggedIn
              ? <Navigate to="/dashboard" />
              : <Login onLogin={() => setIsLoggedIn(true)} />
          }
        />

        <Route
          path="/dashboard"
          element={
            isLoggedIn
              ? <Dashboard onLogout={() => setIsLoggedIn(false)} />
              : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
