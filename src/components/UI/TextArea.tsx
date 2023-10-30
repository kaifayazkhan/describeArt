import React from 'react'

type Input = {
    title: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextArea({ title, placeholder, value, onChange }: Input) {
    return (
        <div className="flex-Col gap-2">
            <label htmlFor={title}>{title}</label>
            <textarea placeholder={placeholder} value={value} onChange={onChange} className='outline-none border rounded-md p-4 bg-transparent border-primaryCTA' rows={4} />
        </div>
    )
}
