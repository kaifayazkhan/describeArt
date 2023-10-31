import React from 'react'

type Props = {
    title: string,
    onClick: () => {}
}

export default function CTAButton({ title, onClick }: Props) {
    return (
        <button onClick={onClick} className="w-full mb-4 cta-btn p-2 rounded-md hover:opacity-80" >
            {title}
        </button>
    )
}
