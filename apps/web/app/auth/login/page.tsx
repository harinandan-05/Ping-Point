"use client"

import { supaClient } from "../../../lib/client"

export default function Login(){
    async function login(){
        await supaClient.auth.signInWithOAuth({
            provider:"google",
            options:{
                redirectTo:"http://localhost:3000/auth/callback"
            }
        })
    }

    return (
        <div>
            <button className="px-4 py-2 bg-black text-white rounded-md" onClick={login}>Signin With Google</button>
        </div>
    )
}