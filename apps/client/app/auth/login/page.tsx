"use client"

import { supaClient } from "@/app/lib/supaclient"

export default function Login(){
    async function authG(){
        await supaClient.auth.signInWithOAuth({
            provider:"google",
            options:{
                redirectTo:"http://localhost:3000/auth/callback"
            }
        })
    }
    return (
        <div>
            <button  onClick={authG}>Signin with google</button>
        </div>
    )
}