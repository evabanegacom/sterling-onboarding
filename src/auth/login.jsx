import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './auth.css';

const Login = () => {
  const [ userLogin, setUserLogin ] = useState({
    email: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault
    console.log(userLogin)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='login-page'>
      <div className='bg-green-50 w-full px-10 h-screen md:w-5/12 flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col w-full rounded-lg bg-white'>
        <h1 className='px-3 py-5 border-b-2 neutral-black border-green-500 font-bold text-2xl'>Login</h1>
        <div className='w-full flex flex-col p-3 mt-2 text-sm'>
          <label className='custom-green font-semibold text-sm'>Email Address</label>
          <input type='email' autocomplete='off' name='email' className='p-2 rounded-lg' onChange={handleChange} />
        </div>

        <div className='w-full flex flex-col p-3 relative text-sm'>
          <label className='custom-green font-semibold text-sm'>Password</label>
          <input autocomplete='off' type={showPassword ? "text" : "password"} name='password' onChange={handleChange} className='rounded-lg p-2 neutral-gray'/>
          <div className='absolute right-3 top-10 mr-3 cursor-pointer' onClick={togglePasswordVisibility}>
            {showPassword ? <FaEye color='#4B9560' size={20}/> : <FaEyeSlash color='#4B9560' size={20}/>}
          </div>
        </div>

        <button type='submit' className='custom-bg-green mb-10 text-white rounded-lg w-48 font-bold text-base mx-auto mt-3 p-2'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login