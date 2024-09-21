const {z} = require('zod');


const signupSchema = z.object({
    username: z
    .string({required_error: "Must fill"})
    .trim()
    .min(3,{message: "Username must be atleast 3 character"})
    .max(15,{message: "Username must not be more than 15 character"}),

    email: z
    .string({required_error: "Must fill"})
    .trim()
    .email({messsage: "Invalid"})
    .min(5, {message:"Email must be atleast 5character"})
    .max(20,{message: "Email must not be more than 20character"}),

    password: z
    .string({required_error: "Must fill"})
    .trim()
    .min(7, {message : "Password must be atleast 7 character"})
    .max(20, {message: "password must not be more than 20 character"}),

    phone: z
    .string({required_error: "Must fill"})
    .trim()
    .min(10, {message: "Must be atleast 10 digit"})
    .max(20,{message: "Can't be more than 20digit"})

})

module.exports = signupSchema;