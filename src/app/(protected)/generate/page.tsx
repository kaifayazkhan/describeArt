import React from 'react';
import GenerateSidebar from './_components/Sidebar';
import GeneratedImages from './_components/GeneratedImages';
import GenerateContextProvider from '@/context/Generate';

export default function Generate() {
  return (
    <GenerateContextProvider>
      <div className='flex-Col h-full md:flex-Row md:heightScreen'>
        <GenerateSidebar />
        <GeneratedImages />
      </div>
    </GenerateContextProvider>
  );
}
