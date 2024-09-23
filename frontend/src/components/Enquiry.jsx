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

      const onSubmit = async (data) => {
        try{
          const response = await fetch("http://localhost:5000/api/form/enquiry", {
            method: "POST",
            headers:{
              "Content-Type" : "application/json",
            },
            body: JSON.stringify(data)
          });
          let res = await response.json();

          if(response.ok){
            alert("Enquiry has been subbmited");
            console.log(res);
          }else{
            alert("failed")
            console.log(res);
          }
        }catch(error){
          console.error(error);
        }
        
       }

  return (
    <>
    <h1 style={{fontSize:'3.5rem',marginTop:'80px'}}>Do you have any enquiry?</h1>
   <div className='enquiry-container'>
        
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <h1>Enquiry</h1>
    <input placeholder='Username' {...register("username", { required: {value: true, message: 'Please fill'}, minLength: {value: 3, message : 'Min length is 3'}, maxLength: {value: 10, message : 'Max length is 10' }})} type="text" />
    {errors.username && <div className='error'>{errors.username.message}</div> }
    <input placeholder='Email' {...register("email", { required: {value: true, message:'Please fill'}, minLength: {value: 3, message : 'Min length is 3'}})} type="email"  />
    {errors.email && <div className='error'>{errors.email.message}</div> }
    <textarea placeholder='Your enquiry'  {...register("message", { required: {value: true, message:'Please fill'}, minLength: {value: 3, message : 'Min characters is 3'}, maxLength: {value: 80, message : 'Max length is 80 characters' }})} />
    {errors.message && <div className='error'>{errors.message.message}</div> }
    <input disabled={isSubmitting} type="submit" value="submit" />
    </form>
    </div>
    </>
  )
}

export default Enquiry
