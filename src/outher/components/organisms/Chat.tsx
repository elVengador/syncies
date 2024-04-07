import { useEffect, useRef, useState } from 'react'

import { MessageData } from '@/bussiness/messages.types'
import { COLOR_BY_USER } from '@/outher/constants/colors.constants'
import {
  createMessage,
  getMessagesByChat,
} from '@/outher/repository/messages.repository'
import { getColorByIdentifier } from '@/outher/utils/colors.utils'
import { CustomCreateMessageBody } from '@/pages/api/messages/[chatId]'

import { ChatInput } from '../molecules/ChatInput'
import { Message } from '../molecules/Message'

const CHAT_ID = 'ch-01'

export const Chat = () => {
  const [messages, setMessage] = useState<MessageData[]>([])
  //   const messagesListRef = useRef<HTMLUListElement>(null)
  //   const messagesRef = useRef<HTMLLIElement[]>([])

  const messagesRef = useRef<(HTMLLIElement | null)[]>([])
  const messagesRefCB = (item: HTMLLIElement | null, idx: number) => {
    if (idx >= messagesRef.current.length)
      messagesRef.current = [...messagesRef.current, item]
    messagesRef.current = messagesRef.current.map((c, i) =>
      i === idx ? item : c
    )
    // messagesRef.current[idx] = item
  }

  const onScrollDownToLastMessage = () => {
    const lastMessageElement =
      messagesRef.current[messagesRef.current.length - 1]
    if (!lastMessageElement) return

    lastMessageElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }

  const onSendMessage = async (message: string) => {
    try {
      const body: CustomCreateMessageBody = {
        data: { message, userId: 'u01', userName: 'ev' },
      }
      await createMessage({ chatId: CHAT_ID, body })
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

  useEffect(() => {
    if (!messages) return
    onScrollDownToLastMessage()
  }, [messages])

  return (
    <section className="h-full border border-white grid grid-rows-[1fr_70px]">
      <ul className="p-[10px] h-full flex flex-col gap-2 overflow-auto">
        {messages.map((cur, idx) => (
          <li ref={(ref) => messagesRefCB(ref, idx)} key={idx}>
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
    </section>
  )
}
