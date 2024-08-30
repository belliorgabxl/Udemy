import { NextUIProvider } from '@nextui-org/system'
import React, { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Provider( {children}: {children: ReactNode}) {
  return (
    <div>
      <NextUIProvider>
        <ToastContainer position='bottom-right' hideProgressBar className='z-50'/>
        {children}
      </NextUIProvider>
    </div>
  )
}


