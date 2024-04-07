'use client'
import { H1 } from 'ev-component-library'

import { ChatInput } from '@/outher/components/molecules/ChatInput'

export default function Home() {
  const onSendMessage = (message: string) => {
    try {
      alert(message)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className="bg-ev-dark h-screen">
      <H1 className="p-[10px]">Hi</H1>
      <ChatInput sendMessage={onSendMessage} className="p-[10px]" />
    </main>
  )
}
