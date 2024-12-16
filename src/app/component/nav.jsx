"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export const Nav = () => {
    const pathname = usePathname()
    return(
        <nav className="flex justify-center items-center p-4"> 
            <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "mr-4 text-blue-500"}>about</Link>
            <Link href="/product" className={pathname === "/product/macbook" ? "font-bold mr-4" : "mr-4 text-blue-500"}>product</Link>
          <SignedOut>
          <SignInButton mode="modal"></SignInButton>
          </SignedOut>

          <SignedIn>
          <UserButton />
          </SignedIn>
        </nav>
    )
}

