import React from 'react'
import ImageGallery from '@/components/ImageGallery'
import UserGuides from '@/components/UserGuide'
import Accordion from '@/components/UI/Accordion'
import WriteRightPrompts from '@/components/WriteRightPrompts'
import GetInTouch from '@/components/GetInTouch'
import HeaderAndFooterLayout from '@/components/HeaderAndFooterLayout'

export default function Home() {
  return (
    <HeaderAndFooterLayout>
      <div className='padding-x'>
        {/* Banner */}
        <div className="mt-6">
          <h1 className='text-large uppercase'>Generate Your Ideas Into</h1>
          <h2 className="text-large uppercase">Stunning Visuals</h2>
          <p>Introducing Describe Art, the Generative AI image brings your ideas to life with perfectly matched and unique visuals.</p>
          <ImageGallery />
        </div>

        {/* User Guides */}
        <div className="mt-6">
          <UserGuides />
        </div>

        {/* How To Write AI Prompts */}
        <section className="my-12">
          <WriteRightPrompts />
        </section>

        {/* FAQs */}
        <section className="my-12  mx-auto">
          <h2 className="text-medium text-center">You ask. We answer</h2>
          <div className="mt-6">
            <Accordion />
          </div>
        </section>

        {/* Get In Touch */}
        <GetInTouch />
      </div>
    </HeaderAndFooterLayout>
  )
}
