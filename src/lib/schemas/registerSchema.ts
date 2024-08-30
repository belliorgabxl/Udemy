import { z } from "zod";


export const registerSchema = z.object({
    name: z.string().min(3,{
        message: "Minimume 3 Characters"
    }) ,
    email: z.string().email({
        message:"เมลมึงผิดไอสัส"
    }), 
    password:  z.string().min(6,{
        message: 'Password must be at least 6 Characters'
    })
})
export type RegisterSchema = z.infer<typeof registerSchema>