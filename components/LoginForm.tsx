'use client';
import { signInUser } from '@/app/actions/authActions';
import { LoginSchema , loginSchema } from '@/lib/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React from 'react'
import {useForm} from "react-hook-form";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function LoginForm() {
    const router = useRouter(); 
    const {register , handleSubmit ,formState:{errors,isValid , isSubmitting}} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: 'onTouched'
    });
    const onSubmit = async (data: LoginSchema) =>{
        const result = await signInUser(data);
        if (result.status === 'success'){
            toast.success("Login Success");
            router.push("/members");
        }else{
            toast.error(result.error as string);
        }
    }
  return (
    <Card className='w-2/5 mx-auto' >
        <CardHeader className='flex- flex-col items-center justify-center'>
            <div className='flex flex-col gap-2 items-center text-secondary'>
                <div className="flex flex-col items-center gap-3">
                    <h1>Logo.</h1>
                    <h1 className='text-3xl font-semibold'>Login</h1>
                </div>
                <p className='text-neutral-500'>Welcome back to NextMatch </p>
                
            </div>
        </CardHeader>
        <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-4'>
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
                    <Button isLoading={isSubmitting} isDisabled={!isValid} fullWidth color='secondary' type='submit'>
                        Login
                    </Button>
                </div>
            </form>
        </CardBody>
    </Card>
  )
}
