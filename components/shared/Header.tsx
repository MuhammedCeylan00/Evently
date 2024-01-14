import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/images/logo.svg'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link href={"/"} className=' w-36'>
          <Image src={logo} alt='logo' width={128} height={38}/>
        </Link>
        <div className='flex w-32 justify-end gap-3'>

        </div>
      </div>
    </header>
  )
}

export default Header
