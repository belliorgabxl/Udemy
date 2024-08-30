import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import {useForm} from "react-hook-form";
import React from 'react'
import { RegisterSchema ,registerSchema } from '@/lib/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '@/app/actions/authActions';

export default function ResgistorForm() {
    const {register , handleSubmit,setError ,formState:{errors,isValid , isSubmitting}} = useForm<RegisterSchema>({
        // resolver: zodResolver(registerSchema),
        mode: 'onTouched'
    });
    const onSubmit = async (data : RegisterSchema)=>{
        const result = await registerUser(data);
        console.log({result});
        if (result.status === 'success'){
            console.log("User register successfully")
        }else{
            if(Array.isArray(result.error)){
                result.error.forEach((e: any)=>{
                    const fieldName = e.path.join('.') as "email" | 'name' | 'password';
                    setError(fieldName,{message: e.message})
                })
            }else{
                setError('root.serverError',{message:result.error});
            }
        }
    }
  return (
    <Card className='w-2/5 mx-auto' >
        <CardHeader className='flex- flex-col items-center justify-center'>
            <div className='flex flex-col gap-2 items-center text-secondary'>
                <div className="flex flex-col items-center gap-3">
                    <h1 className='text-3xl font-semibold'>Register</h1>
                </div>
                <p className='text-neutral-500'>Welcome back to NextMatch </p>
                
            </div>
        </CardHeader>
        <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                    <Input 
                        defaultValue=''
                        label="Username"
                        variant='bordered'
                        {...register('name')}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name?.message as string}
                    />
                    <Input 
                        defaultValue=''
                        label="Email"
                        variant='bordered'
                        {...register('email')}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message as string}
                    />
                    <Input 
                        defaultValue=''
                        label="Password"
                        variant='bordered'
                        type='password'
                        {...register('password')}
                        isInvalid={!!errors.password}
                        errorMessage={errors.password?.message as string}
                    />
                    {errors.root?.serverError && (
                        <p className='text-danger text-sm' >{errors.root.serverError.message}</p>
                    )}
                    <Button
                    isLoading = {isSubmitting}
                     isDisabled={!isValid} fullWidth color='secondary' type='submit'>
                        Register
                    </Button>
                </div>
            </form>
        </CardBody>
    </Card>
  )
}

