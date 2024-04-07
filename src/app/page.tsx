'use client'
import { H1 } from 'ev-component-library'
import { useEffect, useState } from 'react'

import { MessageData } from '@/bussiness/messages.types'
import { ChatInput } from '@/outher/components/molecules/ChatInput'
import { Message } from '@/outher/components/molecules/Message'
import { COLOR_BY_USER } from '@/outher/constants/colors.constants'
import {
  createMessage,
  getMessagesByChat,
} from '@/outher/repository/messages.repository'
import { getColorByIdentifier } from '@/outher/utils/colors.utils'

const CHAT_ID = 'ch-01'

export default function Home() {
  const [messages, setMessage] = useState<MessageData[]>([])
  const onSendMessage = async (message: string) => {
    try {
      await createMessage({
        chatId: CHAT_ID,
        body: { data: { message, userId: 'u01', userName: 'ev' } },
      })
      const newMessages = await getMessagesByChat(CHAT_ID)
      setMessage(newMessages)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const onGetMessages = async () => {
      try {
        const newMessages = await getMessagesByChat(CHAT_ID)
        setMessage(newMessages)
      } catch (error) {
        console.error(error)
      }
    }
    onGetMessages()
  }, [])

  return (
    <main className="bg-ev-dark h-screen">
      <H1 className="p-[10px]">Hi</H1>
      <ul className="p-[10px] flex flex-col gap-2">
        {messages.map((cur, idx) => (
          <li key={idx}>
            <Message
              author={{
                color: getColorByIdentifier(cur.userId, COLOR_BY_USER),
                nickname: cur.userName,
              }}
              message={cur.message}
              className="p-0"
            />
          </li>
        ))}
      </ul>

      <ChatInput sendMessage={onSendMessage} className="p-[10px]" />
    </main>
  )
}
