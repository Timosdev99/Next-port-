"use client"

import { useState } from "react";

export const Counter = () => {
    const [Counter, Setcounter] = useState(0)
     const Count = () => {
        return Setcounter(Counter + 1)
     }
    return <button onClick={Count}>you clicked {Counter} times </button>
}