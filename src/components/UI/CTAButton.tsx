import React from 'react'

type Props = {
    title: string,
    onClick?: () => {},
    type?: "button" | "submit"
}

export default function CTAButton({ title, onClick, type }: Props) {
    return (
        <button onClick={onClick} className="w-full mb-4 cta-btn p-2 rounded-md hover:opacity-80" type={type}>
            {title}
        </button>
    )
}
