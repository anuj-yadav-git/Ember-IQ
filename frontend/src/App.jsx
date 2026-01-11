import { SignedOut, SignedIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import './App.css'

/**
 * Render the main application UI including the header and Clerk authentication controls.
 *
 * Renders a heading "Welcome to Ember-IQ", a SignInButton (modal) shown to signed-out users,
 * a SignOutButton for signed-in users, and a UserButton for accessing user actions.
 *
 * @returns {JSX.Element} The rendered application UI.
 */
function App() {

  return (
    <>
      <h1>Welcome to Ember-IQ</h1>
      <SignedOut>
      <SignInButton mode="modal" >
        <button>Sign up</button>
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