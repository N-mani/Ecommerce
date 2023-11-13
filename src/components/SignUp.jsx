import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from '../Pages/images/SignUp.jpg'

const SignUp = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    firstName: '',
    email: '',
    password: '',
  })
  const [click, setClick] = useState(false)
  const [valid, setValid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (values.firstName && values.email && values.password) {
      setValid(true)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
    setClick(true)
  }
  return (
    <div className=" h-screen flex flex-col justify-center items-center text-[20px] rounded-lg md:flex-row gap-5 px-[8px] py-[32px]">
      <div className="md:w-1/2 md:min-w-2xl md:mt-[100px] flex-shrink-0">
        <img src={img} alt="" className="mx-auto" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap items-start border-2 border-slate-800 rounded-lg text-black   shadow-lg  px-[18px] py-[18px] md:min-w-xl md:w-1/4"
      >
        {click && valid ? (
          <div className="bg-green-500 p-2  rounded-lg  text-[20px] w-full">
            Success! Thank You For Registering
            <p>Redirecting to Login page</p>
          </div>
        ) : (
          ''
        )}
        <label htmlFor="firstName  " className="ml-2   ">
          First Name
        </label>
        <input
          value={values.firstName}
          placeholder="Enter Your FirstName"
          className="p-1 m-2  w-full border-2 border-gray-900 rounded-lg"
          name="firstName"
          onChange={(e) => setValues({ ...values, firstName: e.target.value })}
        />
        {click && !values.firstName ? (
          <span className="text-red-600 ml-2 text-[15px]">
            Please enter a first name
          </span>
        ) : (
          ''
        )}
        <br></br>
        <label htmlFor="email " className="ml-2  ">
          Email
        </label>
        <input
          type="email"
          value={values.email}
          placeholder="Enter Your Email"
          className="p-1 m-2 w-full border-2 border-gray-900 rounded-lg"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          name="email"
        />
        {click && !values.email ? (
          <span className="text-red-600 ml-2 text-[15px]">
            Enter your email
          </span>
        ) : (
          ''
        )}
        <br></br>

        <br></br>
        <label htmlFor="email " className="ml-2   ">
          Password
        </label>
        <input
          value={values.password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          className="p-1 m-2 w-full border-2 border-gray-900 rounded-lg"
          name="password"
        />
        {click && !values.password ? (
          <span className="text-red-600 ml-2 text-[15px]">Enter Password</span>
        ) : (
          ''
        )}
        <br></br>
        <br></br>
        <button
          className="bg-red-400  font-bold text-[20px] p-2 rounded-lg m-auto hover:bg-red-300 w-full"
          type="submit"
        >
          Sign Up
        </button>
        <div className="  font-bold text-[20px] p-2 rounded-lg m-auto  w-full mt-[10px] text-center">
          Already have an account?{' '}
          <Link
            to="/"
            className="cursor-pointer  duration-500 text-blue-500 hover:text-blue-400"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
