import { Link } from "react-router-dom"

const LoginPage = (props) => {
  
  return (
    <div className="formBox"> 
      <h2>Login</h2>
      <form onSubmit={props.handleLogIn}>
        <label htmlFor="email">
          Email
          <input 
            type="email" 
            name="email"
            placeholder="example123@gmail.com"
          />
        </label>
        <label htmlFor="password">
          Password
          <input 
            type="password" 
            name="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Login</button>
        <Link to="/registerPage" className="toRegister">Dan't have an account?</Link>
      </form>
    </div>
  )
}

export default LoginPage