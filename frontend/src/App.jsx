import { SignedOut, SignedIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to Ember-IQ</h1>
      <SignedOut>
      <SignInButton mode="modal" >
        <button>Sign up bokachoda</button>
      </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <UserButton/>
    </>
  )
}

export default App
