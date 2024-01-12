import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <label className="form-label">E-mail</label>
        <p>
          <input placeholder="e-mail" type="text" className="login-input" />
        </p>
        <label className="form-label">Password</label>
        <p>
          <input placeholder="Password" type="text" className="login-input" />
        </p>
        <Link to='/'>

          <button className="button btn-login">Login</button>
        </Link>
      </form>
    </div>

  )
}

export default Login
