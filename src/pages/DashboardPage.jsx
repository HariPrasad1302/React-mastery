import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'

export default function DashboardPage() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  const user = useSelector((state)=> state.auth.user)
  
  console.log(user, isAuth)
  if (!isAuth) return <Navigate to="/login" />

  const dispatch = useDispatch()

  return (
    <div className="p-6">
      <h1 className="text-3xl fonont-bold">Welcome to the Dashboard!</h1>
      <h4>{user?.email}</h4>
      <a className='cursor-pointer' onClick={()=>{dispatch(logout())}}>Logoout</a>
    </div>
  )
}
