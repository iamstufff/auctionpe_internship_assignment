import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'
import HomePage from './Pages/HomePage'
import './App.css'
import SessionPage from './Pages/SessionPage'

function App() {
  const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('token');
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  }
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<ProtectedRoute />} >
            <Route path='/' element={<HomePage />} />
            <Route path='/session' element={<SessionPage />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
