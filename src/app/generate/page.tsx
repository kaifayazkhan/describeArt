import React from 'react'
import GenerateSidebar from './_components/Sidebar'
import GeneratedImages from './_components/GeneratedImages'

export default function Generate() {
    return (
        <div className='flex-Col md:flex-Row md:generateImage'>
            <GenerateSidebar />
            <GeneratedImages />
        </div>
    )
}
