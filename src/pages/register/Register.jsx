import './Register.css'
import img from '../../../public/Logo1.png'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='container-register'>
      <div className='cont-head'>
        <img src={img} alt="" className='img-logo' />
        <h2>
          HearClear
        </h2>
      </div>
      <form action="" className='form-register'>
        <h4>
          Registrarse
        </h4>
        
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Telefono</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className='cont-btnR'>
          <button>Registrar</button>
          <Link to="/" className='btn-cancel'>
            <button>cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
