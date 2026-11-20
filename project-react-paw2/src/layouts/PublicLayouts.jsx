import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import ThemeSwap from '../components/ThemeSwap'

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ThemeSwap/>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </div>
  )
}

export default PublicLayout