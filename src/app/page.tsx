import React from 'react'
import ImageGallery from '@/components/ImageGallery'

export default function Home() {
  return (
    <div className='padding-x'>
      {/* Banner */}
      <div className="mt-6">
        <h1 className='text-large uppercase'>Generate Your Ideas Into</h1>
        <h2 className="text-large uppercase">Stunning Visuals</h2>
        <p>Introducing Describe Art, the Generative AI image brings your ideas to life with perfectly matched and unique visuals.</p>
        <ImageGallery />
      </div>
      {/* Pricing */}
      {/* <div className="mt-6">
        <h2 className="text-medium">Purchase Subscription</h2>
      </div> */}
      {/* FAQs */}
    </div>
  )
}
