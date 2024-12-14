"use client"
 import { useEffect } from "react"

 const error = (error) => {
    useEffect(
        () => {
            console.log(`an error ocurred ${error}`)
        }, [error]
    )

    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="text-2xl text-red-500"> error serving data</div>
        </div>
    )
 }

 export  default error 