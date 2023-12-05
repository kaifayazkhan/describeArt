"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CTAButton from "../UI/CTAButton";
import { headerData } from "@/constants/data";
import Hamburger from "./Hamburger";
import { headers } from "./types";
import useToken from "@/hooks/useToken";


export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [token, setToken] = useState(false);

    const { removeToken } = useToken();


    useEffect(() => {
        const userToken = localStorage.getItem('token');
        setToken(userToken !== null);
    }, [token])


    const handleLogin = () => {
        router.push("/signIn");
    }

    const handleLogout = () => {
        removeToken();
        router.push("/");
    };

    return (
        <header className="bg-black w-full sticky top-0 z-30 left-0 right-0 padding-x">
            <div className="h-20 flex-Row-between">
                <div className="flex-center h-full gap-1">
                    <Image src="/assets/logo-1.webp" width={50} height={100} alt="Logo" />
                    <span className="text-xl font-semibold hidden sm:block">Describe Art</span>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 ">
                        {headerData?.map(({ id, title, link }: headers) => (
                            <li
                                key={id}
                                className={`hover:text-primaryCTA ${pathname == link ? "text-primaryCTA" : ""
                                    }  transition-all duration-200 flex items-center gap-2 cursor-pointer relative`}
                            >
                                <Link href={link}>{title}</Link>
                            </li>
                        ))}
                        <li>
                            {token ? (
                                <CTAButton title="Logout" onClick={handleLogout} className="rounded-3xl px-5" />
                            ) : (
                                <CTAButton title="Login" onClick={handleLogin} className="rounded-3xl px-5" />
                            )}
                        </li>
                    </ul>
                </nav>

                <div className="flex md:hidden flex-center gap-3">
                    <div className="md:hidden">
                        {token ? (
                            <CTAButton title="Logout" onClick={handleLogout} className="rounded-3xl px-5" />
                        ) : (
                            <CTAButton title="Login" onClick={handleLogin} className="rounded-3xl px-5" />
                        )}
                    </div>
                    <Hamburger />
                </div>
            </div>
        </header>
    );
}
