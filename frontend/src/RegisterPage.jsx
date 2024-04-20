import { useState } from "react"
import { Link } from "react-router-dom"

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  let registerAccounts = [
    email, password, userName
  ]
  let store = JSON.parse(localStorage.getItem('registerDetails'))
  let registeredAccounts = []

  if(store) {
    registerAccounts.push(store)
  }

  const registerNewAccoount = (e) => {
    e.preventDefault()
    localStorage.setItem('registerDetails', JSON.stringify(registerAccounts))
    console.log(registeredAccounts);
    
  }
  return (
    <div className="formBox">
      <h2>Register</h2>
      <form onSubmit={registerNewAccoount}>
        <label htmlFor="userName">
          Username
          <input 
            type="text" 
            value={userName} 
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email" 
            value={email} 
            placeholder="example123@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input 
            type="password" 
            value={password} 
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign In</button>
        <Link to="/loginPage" className="toLogin">Has Account?</Link>
      </form>
    </div>
  )
}

export default RegisterPage