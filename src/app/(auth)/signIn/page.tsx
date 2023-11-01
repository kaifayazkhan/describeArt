"use client"
import React from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/config/firebase'

export default function SignIn() {
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = async () => {
        const res = await signInWithPopup(auth, provider);
        console.log("Response:", res);
    }
    return (
        <div className='padding-x'>
            <button className='bg-primaryText text-white p-4' onClick={signInWithGoogle}>Sign In with google</button>
        </div>
    )
}
