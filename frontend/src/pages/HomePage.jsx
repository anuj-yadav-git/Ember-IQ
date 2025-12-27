import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function HomePage() {

    
    
  return (
    <div>
        <button className='btn btn-secondary' onClick={() => toast.success("Hurray!!")} >Click Me</button>

        <SignedOut>
            <SignInButton mode='modal'>
                <button>Login</button>
            </SignInButton>
        </SignedOut>

        <SignedIn>
            <SignOutButton/>
        </SignedIn>

        <UserButton/>
    </div>
  )
}

export default HomePage