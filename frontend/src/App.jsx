import { useUser } from '@clerk/clerk-react'
import { Routes, Route, Navigate } from 'react-router'
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import {Toaster} from "react-hot-toast"
import DashboardPage from './pages/DashboardPage';
import ProblemPage from './pages/ProblemPage';

/**
 * Top-level application component that renders routed pages and toast notifications.
 *
 * Waits for the authentication state to be ready to avoid UI flicker, then renders route definitions that either display page components or navigate to the appropriate path based on the user's sign-in status.
 * @returns {JSX.Element|null} The routed application UI and Toaster when authentication state is loaded, or `null` while loading.
 */
function App() {
  const {isSignedIn, isLoaded} = useUser() //from clerk

  //this will get rid of the flickering effect
  if(!isLoaded) return null


  return (
    <>
    
    <Routes>

      <Route path='/' element={!isSignedIn ? <HomePage/> : <Navigate to={"/dashboard"} />}/>
      <Route path='/problems' element={isSignedIn ? <ProblemsPage/> : <Navigate to= {"/"}/>}/>

      <Route path='/problem/:id' element={isSignedIn ? <ProblemPage/> : <Navigate to= {"/"}/>}/>
      
      <Route path='/dashboard' element={isSignedIn ? <DashboardPage/> : <Navigate to= {"/"}/>}/>

    </Routes>

    <Toaster/>
    </>
    
  );
}

export default App