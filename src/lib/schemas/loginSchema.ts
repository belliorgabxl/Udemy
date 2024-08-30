import { z } from "zod";
export const loginSchema = z.object({
    email: z.string().email({
        message:"เมลมึงผิดไอสัส"
    }), 
    password:  z.string().min(6,{
        message: 'Password must be at least 6 Characters'
    })
})
export type LoginSchema = z.infer<typeof loginSchema>