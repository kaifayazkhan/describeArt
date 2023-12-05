"use client"
import useToken from "@/hooks/useToken";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { token } = useToken();

    if (!token) {
        // return("/signIn");
        router.push("/signIn")
        return;
    }

    return (
        <>
            {token && children}
        </>
    )
}
