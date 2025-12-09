"use client"
import { useRouter } from "next/navigation"

export default function Dashboard(){
    const router = useRouter()
    return (
        <div>
            <button onClick={() => router.push('/gui')}>go to gui</button>
        </div>
    )
}