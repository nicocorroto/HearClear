import './Login.css'
import img from '../../assets/Logo1.png'
import Register from '../register/Register'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="Container-Login">
                <div className='Cont-Logo'>
                    <img
                        src={img}
                        alt=""
                        className='img-logo'
                    />
                    <h2>
                        HearClear
                    </h2>
                </div>
                <div className='Cont-form'>
                    <div>
                        <h4 className='Init'>
                            Iniciar sesión
                        </h4>
                    </div>
                    <form action="" className='Form-Login'>
                        <div>
                            <label htmlFor="">Email</label>
                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className=""
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <div className='Cont-Input'>
                                <input
                                    id="email"
                                    name="email"
                                    type="password"
                                    required
                                    className=""
                                />
                            </div>
                        </div>
                        <div className='cont-btn'>
                            <Link to='/home' className='btn'>
                                <button>
                                    Iniciar Sesion
                                </button>
                            </Link>
                            <p >
                                <Link to='/Register' className='btn-register'>
                                    Registrate
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
