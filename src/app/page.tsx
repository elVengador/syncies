'use client'
import { H1 } from 'ev-component-library'

import { ChatInput } from '@/outher/components/molecules/ChatInput'
import { Message } from '@/outher/components/molecules/Message'

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
      <ul className="p-[10px] flex flex-col gap-2">
        <li>
          <Message
            author={{ color: 'royalBlue', nickname: 'elVengador' }}
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo erat, ultricies pretium lorem a, tempor maximus tortor. Donec ut erat nec urna egestas malesuada. Proin in nisi eu sem pharetra rhoncus. Suspendisse consectetur egestas purus eu posuere. Sed dolor nulla, cursus id malesuada vel, dapibus id nisi. Suspendisse finibus urna id malesuada scelerisque. Nulla vel nulla ex. Phasellus auctor tellus in enim semper pretium. Morbi sodales pharetra velit, nec tristique eros porta vitae. Sed nec congue sapien, nec bibendum sem. Vestibulum semper ipsum nec suscipit commodo."
            className="p-0"
          />
        </li>
        <li>
          <Message
            author={{ color: 'pink', nickname: 'La Rosy' }}
            message="Consectetur adipiscing elit."
            className="p-0"
          />
        </li>
        <li>
          <Message
            author={{ color: 'pink', nickname: 'La Rosy' }}
            message="Nunc justo erat, ultricies pretium lorem a, tempor maximus tortor. Donec ut erat nec urna egestas malesuada. Proin in nisi eu sem pharetra rhoncus. Suspendisse consectetur egestas purus eu posuere. Sed dolor nulla, cursus id malesuada vel, dapibus id nisi. Suspendisse finibus urna id malesuada scelerisque. Nulla vel nulla ex. Phasellus auctor tellus in enim semper pretium. Morbi sodales pharetra velit, nec tristique eros porta vitae. Sed nec congue sapien, nec bibendum sem. Vestibulum semper ipsum nec suscipit commodo."
            className="p-0"
          />
        </li>
      </ul>

      <ChatInput sendMessage={onSendMessage} className="p-[10px]" />
    </main>
  )
}
