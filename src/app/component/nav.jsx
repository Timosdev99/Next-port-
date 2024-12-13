"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Nav = () => {
    const pathname = usePathname()
    return(
        <nav>
            <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "mr-4 text-blue-500"}>about</Link>
            <Link href="/product" className={pathname === "/product" ? "font-bold mr-4" : "mr-4 text-blue-500"}>product</Link>
        </nav>
    )
}

