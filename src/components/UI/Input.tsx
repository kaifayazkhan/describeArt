import React from 'react'

type Input = {
    title: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputBox({ title, type, placeholder, value, onChange }: Input) {
    return (
        <div className="flex-Col gap-2">
            <label htmlFor={title}>{title}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='outline-none border rounded-md p-4 bg-transparent border-primaryCTA'
            />
        </div>
    )
}
