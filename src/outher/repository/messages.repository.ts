import { CustomMessageResponse, MessageData } from '@/bussiness/messages.types'
import {
  CustomCreateMessageBody,
  CustomCreateMessageResponse,
} from '@/pages/api/messages/[chatId]'

import { GET, POST } from '../utils/http.utils'

const URI = 'http://localhost:3000/api'

export const getMessagesByChat = async (
  chatId: string
): Promise<MessageData[]> => {
  const res = await GET<CustomMessageResponse>(`${URI}/messages/${chatId}`)
  if (res.error) throw Error(res.error)
  if (!res.data) return []
  return res.data.messages
}

type CreateMessageInput = { chatId: string; body: CustomCreateMessageBody }

export const createMessage = async ({
  chatId,
  body,
}: CreateMessageInput): Promise<void> => {
  console.log('client:', { body })
  const res = await POST<CustomCreateMessageResponse, CustomCreateMessageBody>(
    `${URI}/messages/${chatId}`,
    body
  )
  if (res.error) throw Error(res.error)
  return
}
