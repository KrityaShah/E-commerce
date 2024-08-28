import React from 'react'
import { useForm  } from "react-hook-form"
import "./Login.css"


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)

  return (
    <div className='container'>
        
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <h1>LOGIN</h1>
    <input placeholder='Username' {...register("username", { required: true, minLength: 3, maxLength:15 })} type="text" />
    {errors.username && <div className='error'>There is error in username</div> }
    <input placeholder='Password' {...register("password", { required: true, minLength: 8, maxLength:15 })} type="password"  />
    {errors.username && <div>There is error in password</div> }
    <input type="submit" value="submit" />
    </form>
    </div>
  )
}

export default Login
