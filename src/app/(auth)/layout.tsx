"use client"
import React from 'react'
import { useRouter } from "next/navigation"
import AuthHeader from './_components/AuthHeader'
import useToken from '@/hooks/useToken'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const { token } = useToken();
    const router = useRouter();

    if (token) {
        router.push("/")
        return;
    }

    return (
        <>
            {/* <AuthHeader /> */}
            {children}
        </>
    )
}
