'use client'
import { H1 } from 'ev-component-library'

import { Chat } from '@/outher/components/organisms/Chat'

export default function Home() {
  return (
    <main className="h-screen max-h-screen grid grid-rows-[50px_minmax(0,1fr)] p-[20px] bg-ev-dark ">
      <div className="max-w-[600px] w-full h-full mx-auto flex justify-center items-center">
        <H1 className="p-[10px] text-[20px]">Syncies</H1>
      </div>

      <div className="max-w-[600px] w-full h-full mx-auto">
        <Chat />
      </div>
    </main>
  )
}
