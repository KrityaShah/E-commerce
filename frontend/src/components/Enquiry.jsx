import React from 'react'
import { useForm  } from "react-hook-form"
import "./Enquiry.css"


const Enquiry = () => {

    const {
        register,
        handleSubmit,
        watch,
        
        formState: { errors, isSubmitting },
      } = useForm()

      const onSubmit = (data) => console.log(data)

  return (
   <div className='enquiry-container'>
        
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <h1>Enquiry</h1>
    <input placeholder='Username' {...register("username", { required: {value: true, message: 'Please fill'}, minLength: {value: 3, message : 'Min length is 3'}, maxLength: {value: 10, message : 'Max length is 10' }})} type="text" />
    {errors.username && <div className='error'>{errors.username.message}</div> }
    <input placeholder='Email' {...register("email", { required: {value: true, message:'Please fill'}, minLength: {value: 3, message : 'Min length is 3'}, maxLength: {value: 10, message : 'Max length is 10' }})} type="text"  />
    {errors.email && <div className='error'>{errors.email.message}</div> }
    <textarea placeholder='Your enquiry'  {...register("enquiry", { required: {value: true, message:'Please fill'}, minLength: {value: 3, message : 'Min characters is 3'}, maxLength: {value: 60, message : 'Max length is 60 characters' }})} />
    <input disabled={isSubmitting} type="submit" value="submit" />
    </form>
    </div>
  )
}

export default Enquiry
