import { NavbarItem } from '@nextui-org/navbar'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

type Props = {
    href: string;
    label: string;

}


export default function NavLink({href,label}:Props) {
    const pathName = usePathname();
  return (
    <div>
        <NavbarItem  as={Link} isActive={pathName === href} href={href}>
            {label}
        </NavbarItem>
    </div>
  )
}
