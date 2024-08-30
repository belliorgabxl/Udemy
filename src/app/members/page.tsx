
import React from 'react'
import { Button } from '@nextui-org/button'
import Link from 'next/link'


export default function  Members() {
  return (
    <div className="text-5xl">
      Hello Members
      
      <Button
      as={Link}
      href='/'>
        go back home
      </Button>
    </div>
  )
}
