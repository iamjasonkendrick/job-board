import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'
import NotFound from '../pages/404'
import CompanyDashboard from '../pages/CompanyDashboard'
import CompanyOnBoarding from '../pages/CompanyOnBoarding'
import EmployeeDashboard from '../pages/EmployeeDashboard'
import EmployeeOnBoarding from '../pages/EmployeeOnBoarding'
import Login from '../pages/Login'
import Privacy from '../pages/privacy'
import Register from '../pages/Register'
import Terms from '../pages/terms'

export default function Layout() {
  //const { isLoggedIn, navigate, type } = useAuth();
  const location = useLocation()
  const routesWithNavbar = ['/dashboard/employer', '/dashboard/employee']
  const showNavbar = routesWithNavbar.includes(location.pathname)

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/onboarding/employer' element={<CompanyOnBoarding />} />
        <Route path='/onboarding/employee' element={<EmployeeOnBoarding />} />
        <Route path='/dashboard/employer' element={<CompanyDashboard />} />
        <Route path='/dashboard/employee' element={<EmployeeDashboard />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
