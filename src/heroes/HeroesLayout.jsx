import { Outlet } from "react-router-dom"
import Navbar from "../ui/components/Navbar"

function HeroesLayout() {
  return (
    <>
      <Navbar />
      <main className="mb-16">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-center p-2  text-white font-bold fixed bottom-0 left-0 right-0">
        <p>made by <span className="text-emerald-500">codey</span></p>
      </footer>
    </>
  )
}

export default HeroesLayout