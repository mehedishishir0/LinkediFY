import React from 'react'
import SearchInput from './SearchInput'
import NavIteam from './NavIteam'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-50 shadow-sm'>
      <div className='flex items-center justify-between max-w-6xl mx-auto h-14  px-3 '>
        <div className='flex items-center gap-2'>
          <h1>LOGO</h1>
          <div className='md:block hidden'>
            <SearchInput />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='md:block hidden'>
            <NavIteam />
          </div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button className='rounded-full ' variant={"secondary"}>
                <SignInButton />
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar