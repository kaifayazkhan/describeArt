"use client"
import React, { useState } from 'react'

const getToken = () => {
    if (typeof window !== "undefined") {
        try {
            const token = localStorage.getItem("token");
            return token;
        } catch (err) {
            console.error(err);
        }
    }
}

export default function useToken() {
    const [token, setToken] = useState<string | undefined | null>(getToken());

    const saveToken = (userToken: string) => {
        localStorage.setItem("token", userToken);
        setToken(userToken);
    }

    const removeToken = () => {
        localStorage.removeItem("token");
        setToken(null);
    }

    return { token, saveToken, removeToken }
}
