import React from 'react'
import { useForm  } from "react-hook-form"
import "./Login.css"


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        
        formState: { errors, isSubmitting },
      } = useForm()

      const onSubmit = async (data) => {
        try {
          const  response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
          let res = await response.json();

          if (response.ok) {
            alert("Sucessfull login");
            console.log(res);
          }else{
            alert("Invalid credentail");
            console.log(res)
          }
        } catch (error) {
          console.error(error)
        }
      }

  return (
    <div className='container'>
        
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <h1>LOGIN</h1>
    <input placeholder='Email' {...register("email", { required: {value: true, message: 'Please fill'}, minLength: {value: 3, message : 'Min length is 3'}, maxLength: {value: 10, message : 'Max length is 10' }})} type="text" />
    {errors.email && <div className='error'>{errors.email.message}</div> }
    <input placeholder='Password' {...register("password", { required: {value: true, message:'Please fill'}, minLength: 8, maxLength:15 })} type="password"  />
    {errors.password && <div className='error'>{errors.password.message}</div> }
    <input disabled={isSubmitting} type="submit" value="submit" />
    </form>
    </div>
  )
}

export default Login
