import React from 'react'
;
import {Button, Navbar ,Link, NavbarBrand , NavbarContent, NavbarItem } from '@nextui-org/react';
import NavLink from './NavLink';


export default function TopNavbar() {
  return (
    <Navbar
    maxWidth='xl'
    className='bg-gradient-to-r from-purple-100  to-purple-500'
    classNames={
        {item:[
            'pt-5','pb-5','pl-3','pr-3',
            'text-xl',
            'text-white',
            'data-[active=true]:text-black',
            'data-[active=true]:bg-red-200'
        ]}
    }
    >
        <NavbarBrand>
            <div className='font-bold text-3xl flex '>
                <a href='/' >
                NextMatch
                </a>
            </div>
        </NavbarBrand>
        <NavbarContent justify='center'>
            <NavLink href='/members' label='Member'/>
            <NavLink href='/list' label='Lists'/>
            <NavLink href='/message' label='Message'/>
        </NavbarContent>
        <NavbarContent justify='end'>
            <Button variant='bordered'
            as={Link} href='/login' className='text-black bg-white opacity-70'>Login</Button>
            <Button variant='bordered'
            as={Link} href='/register' className='text-black bg-white opacity-70'>Register</Button>
        </NavbarContent>
    </Navbar>
  )
}
