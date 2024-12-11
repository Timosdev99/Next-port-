import Link from 'next/link'
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Your Name</Link>
        <div className="flex space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-2">
            <FaUser />
            <span>About</span>
          </Link>
          <Link href="/projects" className="flex items-center space-x-2">
            <FaCode />
            <span>Projects</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-2">
            <FaEnvelope />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}